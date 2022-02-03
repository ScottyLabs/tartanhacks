import {
  Link,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactElement, useEffect, useState } from "react";
import { ScheduleItem, ScheduleItemPlatform } from "types/event";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.waveGradient.end}87, ${theme.palette.waveGradient.start} 50%, ${theme.palette.waveGradient.start})`,
  alignItems: "center",
  paddingTop: "5em",
  display: "flex",
  flexDirection: "column",
  gap: "3em",
  paddingBottom: "5em",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "4em",
  fontWeight: 600,
  color: "white",
  textShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "2.5em",
  },
}));

const DialogText = styled("div")(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    width: "100%",
  },
  display: "flex",
  alignItems: "center"
}));

const GroupList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  paddingLeft: "0px",
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    flexDirection: "column",
    alignItems: "center"
  },
  gap: "1em",
}));

const EventList = styled("ul")({
  listStyle: "none",
  paddingLeft: "0px",
  width: "100%",
});

const Event = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    padding: "15px",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    padding: "10px",
  },
}));

const EventDateTime = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "0.7",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginRight: "10px",
  background: "#fff",
  borderRadius: "20px",
  padding: "5px",
}));

const EventDetails = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "10px",
  background: "#fff",
  borderRadius: "20px",
  padding: "10px",
}));

const EventGroup = styled(Accordion)(({ theme }) => ({
  display: "flex",
  width: "30%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "2.5em",
  marginTop: "2.5em",
  backgroundImage: `linear-gradient(316.54deg, rgba(255, 255, 255, 0.85) 35.13%, rgba(255, 232, 172, 0.85) 126.39%)`,
  boxShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  backdropFilter: "blur(4px)",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    width: "80%",
    padding: "1em",
  },
  "&.MuiAccordion-root:before": {
    display: "none",
  },
  borderRadius: "20px",
  "&.MuiAccordion-root:first-of-type": {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  "&.MuiAccordion-root.Mui-expanded:first-of-type": {
    marginTop: "16px",
  },
  "&.MuiAccordion-root:last-of-type": {
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  flexGrow: 1,
}));

const EventGroupDetails = styled(AccordionDetails)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  flexGrow: "1",
}));

const EventGroupSummary = styled(AccordionSummary)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignSelf: "center",
  flexGrow: "1",
  position: "relative",
}));

const EventDate = styled(Typography)(({ theme }) => ({
  fontSize: "2em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    fontSize: "1.5em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1.5em",
  },
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  width: "100%",
}));

const EventTime = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    fontSize: "1em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "0.8em",
  },
  whiteSpace: "pre-line",
  color: theme.palette.text.primary,
}));

const EventPlatform = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    fontSize: "0.9em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "0.75em",
  },
}));

const EventDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  paddingBottom: "1em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    fontSize: "0.9em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "0.8em",
  },
  color: "#000",
}));

const EventName = styled(Typography)(({ theme }) => ({
  wordBreak: "break-word",
  fontSize: "1.5em",
  fontWeight: "bold",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    fontSize: "1.3em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1em",
  },
  color: "#000",
}));

const EventLocation = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  fontWeight: "bold",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  display: "inline",
  position: "relative",
  overflow: "hidden",

  "&:after": {
    content: "''",
    position: "absolute",
    zIndex: 1,
    right: 0,
    width: 0,
    bottom: "-2px",
    background: theme.palette.secondary.main,
    height: "1px",
    transitionProperty: "width",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-out",
  },
  "&:is(:hover,:focus,:active):after": {
    left: 0,
    right: "auto",
    width: "100%",
  },
  wordBreak: "break-word",
}));

const SpinnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

const ScheduleSection = (): ReactElement => {
  const [events, setEvents] = useState<{ [name: string]: Array<ScheduleItem> }>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(false);
  const getDateTime = (
    timestamp: number,
    useEST: boolean
  ): { [key: string]: number } => {
    const dateTime = useEST
      ? new Date(
          new Date(timestamp / 1000).toLocaleString("en-US", {
            timeZone: "America/New_York",
          })
        )
      : new Date(new Date(timestamp / 1000).toLocaleString("en-US"));
    const month = dateTime.getMonth();
    const day = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const dayOfWeek = dateTime.getDay();
    return {
      month: month,
      day: day,
      hours: hours,
      minutes: minutes,
      day_of_week: dayOfWeek,
    };
  };

  const getEventObjects = (
    events: Array<ScheduleItem>,
    idx: number
  ): ReactElement => {
    const dateTimeHeader = getDateTime(events[0].startTime, true);
    const monthHeader = dateTimeHeader["month"];
    const dayHeader = dateTimeHeader["day"];
    const dayOfWeekHeader = dateTimeHeader["day_of_week"];

    const dateTimeToday = getDateTime(new Date().valueOf() * 1000, true);
    const dayToday = dateTimeToday["day"];
    const monthToday = dateTimeToday["month"];

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const platformsStrings = {
      [ScheduleItemPlatform.IN_PERSON]: "In Person",
      [ScheduleItemPlatform.DISCORD]: "Discord",
      [ScheduleItemPlatform.HOPIN]: "Hopin",
      [ScheduleItemPlatform.YOUTUBE]: "Youtube",
      [ScheduleItemPlatform.ZOOM]: "Zoom",
      [ScheduleItemPlatform.HYBRID]: "Hybrid",
      [ScheduleItemPlatform.OTHER]: "",
    };

    let eventRecords: Array<ReactElement> = [];

    events.forEach((event: ScheduleItem) => {
      const dateTimeStart = getDateTime(event.startTime, true);

      const monthStart = monthNames[dateTimeStart["month"]];
      const dateStart = dateTimeStart["day"].toString();
      const hoursStart = dateTimeStart["hours"];
      const minutesStart = dateTimeStart["minutes"];
      const timeStart =
        (hoursStart % 12 == 0 ? 12 : hoursStart % 12).toString() +
        ":" +
        (minutesStart > 9
          ? minutesStart.toString()
          : "0" + minutesStart.toString()) +
        (hoursStart >= 12 ? " pm" : " am");

      const dateTimeEnd = getDateTime(event.endTime, true);

      const monthEnd = monthNames[dateTimeEnd["month"]];
      const dateEnd = dateTimeEnd["day"].toString();
      const hoursEnd = dateTimeEnd["hours"];
      const minutesEnd = dateTimeEnd["minutes"];
      const timeEnd =
        (hoursEnd % 12 == 0 ? 12 : hoursEnd % 12).toString() +
        ":" +
        (minutesEnd > 9 ? minutesEnd.toString() : "0" + minutesEnd.toString()) +
        (hoursEnd >= 12 ? " pm" : " am");

      let dateTimeString: string;

      if (dateStart == dateEnd && monthStart == monthStart) {
        dateTimeString =
          event.startTime == event.endTime
            ? timeStart + " EST"
            : timeStart + " - " + timeEnd + " EST";
      } else {
        dateTimeString =
          dateStart +
          " " +
          monthStart +
          " " +
          timeStart +
          " - \n" +
          dateEnd +
          " " +
          monthEnd +
          " " +
          timeEnd +
          " EST";
      }

      const eventString = platformsStrings[event.platform];
      let eventLabel = (
        <EventLocation>{eventString + ", " + event.location}</EventLocation>
      );
      if (event.platformUrl && event.platform !== ScheduleItemPlatform.ZOOM) {
        eventLabel = (
          <EventLocation>
            {eventString}
            {event.location && event.location.toLowerCase() !== "zoom"
              ? `, ${event.location}, `
              : ""}
            <StyledLink
              href={event.platformUrl}
              target="_blank"
              underline="none"
            >
              Zoom
            </StyledLink>
          </EventLocation>
        );
      } else if (event.platform == ScheduleItemPlatform.ZOOM) {
        eventLabel = (
          <EventLocation>
            <StyledLink
              href={event.platformUrl}
              target="_blank"
              underline="none"
            >
              Zoom
            </StyledLink>
          </EventLocation>
        );
      }

      eventRecords.push(
        <Event key={eventRecords.length}>
          <EventDetails>
            <EventName>{event.name}</EventName>
            <EventDescription>{event.description}</EventDescription>
            <EventPlatform>{eventLabel}</EventPlatform>
            <EventTime>{dateTimeString}</EventTime>
          </EventDetails>
        </Event>
      );
    });

    return (
      <EventGroup
        key={idx}
        defaultExpanded={dayToday == dayHeader && monthToday == monthHeader}
        sx={{
          "& .MuiCollapse-root": {
            width: "100%",
          },
        }}
      >
        <EventGroupSummary expandIcon={<ExpandMoreIcon />}>
          <EventDate>
            {dayNames[dayOfWeekHeader] +
              ", " +
              dayHeader.toString() +
              " " +
              monthNames[monthHeader]}
          </EventDate>
        </EventGroupSummary>
        <EventGroupDetails>
          <EventList>{eventRecords}</EventList>
        </EventGroupDetails>
      </EventGroup>
    );
  };

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const eventsUngrouped = await (
          await fetch(process.env.BACKEND_URL + "/schedule/")
        ).json();
        let groups: { [name: string]: Array<ScheduleItem> } = {};
        eventsUngrouped.forEach((element: ScheduleItem) => {
          const dateTimeStart = getDateTime(element.startTime, true);
          const key = (
            dateTimeStart["month"] * 32 +
            dateTimeStart["day"]
          ).toString();
          if (groups[key]) {
            groups[key].push(element);
          } else {
            groups[key] = [element];
          }
        });
        setEvents(groups);
      } catch (err: any) {
        console.error(err);
      }
      setLoading(false);
    };
    getEvents();
  }, []);
  return (
    <Section id="schedule">
      <Heading variant="h2">Schedule</Heading>
      <DialogText>
        <Collapse in={loading}>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </Collapse>
        <GroupList>
          {Object.keys(events).map((date, idx) =>
            getEventObjects(events[date], idx)
          )}
        </GroupList>
      </DialogText>
    </Section>
  );
};

export default ScheduleSection;
