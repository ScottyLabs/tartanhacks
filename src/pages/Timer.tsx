import { useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://backend.tartanhacks.com/schedule';

const IGNORED_EVENTS = ['HACKING STARTS'];

interface Event {
  name: string;
  location: string;
  startTime: number;
  endTime: number;
}

export default function Timer() {
  const [remainingTimeString, setRemainingTimeString] = useState('');
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const [schedule, setSchedule] = useState<Event[]>([]);
  const [started, setStarted] = useState(false);
  const [nextBigEvent, setNextBigEvent] = useState('Hacking');

  const setRemainingTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    setRemainingTimeString(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  const getRemainingTime = () => {
    if (schedule.length === 0) {
      return 0;
    }
    const hackingEvent = schedule.find((event: Event) => event.name === 'HACKING STARTS');
    const judgingEvent = schedule.find((event: Event) => event.name === 'Judging Expo');

    if (!hackingEvent || !judgingEvent) {
      return 0;
    }

    const currentTime = Date.now();
    const hackingStartTime = hackingEvent.startTime / 1000;
    const hackingEndTime = hackingEvent.endTime / 1000;
    const judgingStartTime = judgingEvent.startTime / 1000;
    const judgingEndTime = judgingEvent.endTime / 1000;

    if (currentTime < hackingStartTime) {
      setNextBigEvent('Hacking');
      setStarted(false);
      return hackingStartTime - currentTime;
    }
    if (currentTime < hackingEndTime) {
      setNextBigEvent('Hacking');
      setStarted(true);
      return hackingEndTime - currentTime;
    }
    if (currentTime < judgingStartTime) {
      setNextBigEvent('Judging');
      setStarted(false);
      return judgingStartTime - currentTime;
    }
    if (currentTime < judgingEndTime) {
      setNextBigEvent('Judging');
      setStarted(true);
      return judgingEndTime - currentTime;
    }
    return 0;
  };

  const fetchSchedule = async () => {
    console.log('Fetching schedule...');
    try {
      const response = await fetch(BACKEND_URL);
      const data = await response.json();
      setSchedule(data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };

  const getCurrentEvents = () => {
    const currentEvents: Event[] = [];

    const currentTime = Date.now() * 1000;

    for (const { startTime, endTime, name, location } of schedule) {
      if (IGNORED_EVENTS.includes(name)) {
        continue;
      }

      if (currentTime >= startTime && currentTime <= endTime) {
        currentEvents.push({ name, location, startTime, endTime });
      }
    }
    return currentEvents;
  };

  useEffect(() => {
    fetchSchedule().then();
    setRemainingTime(getRemainingTime());
    setCurrentEvents(getCurrentEvents());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
      setCurrentEvents(getCurrentEvents());
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTimeString, currentEvents]);

  return (
    <div className="z-50 flex h-screen flex-col items-center justify-center font-sfpro">
      <b className="text-green z-50 text-5xl uppercase">
        {nextBigEvent} {started ? 'ENDS' : 'STARTS'} IN
      </b>
      <b className="z-50 pt-8 text-7xl text-white">{remainingTimeString}</b>
      <b className="text-green z-50 pb-4 pt-16 text-4xl">HAPPENING NOW</b>
      {currentEvents.map((event) => (
        <b key={event.name} className="z-50 text-2xl">
          {event.name} @ {event.location}
        </b>
      ))}
      {currentEvents.length === 0 && <b className="z-50 text-2xl">-</b>}
    </div>
  );
}
