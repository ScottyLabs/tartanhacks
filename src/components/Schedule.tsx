function Block({ title, time, className }: { title: string, time: string, className: string }) {
  return (
    <div className={`${className} border p-2 rounded border-gray-600`}>
      <h1 className='text-lg text-center'>{title}</h1>
      <p className='text-sm text-center text-gray-400'>{time}</p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className='py-16' id='schedule'>
      <div className='py-16 pb-40' id='schedule'>
        <div className='text-beige m-auto'>
          <h3 className='text-2xl mb-4 text-center text-yellow'>Schedule</h3>
          <div className='max-w-4xl m-auto'>
            <div className='grid grid-rows-[repeat(12,_minmax(0,_1fr))] grid-cols-4 gap-x-2 gap-y-2'>
              <div className='col-span-2 col-start-1 row-span-1 text-center text-xl text-yellow'>Feb 3</div>
              <div className='col-span-2 col-start-3 row-span-1 text-center text-xl text-yellow'>Feb 4</div>
              <Block time='10am - 11am' title='Breakfast' className='col-span-2 col-start-3 row-span-1' />
              <Block time='1pm - 2pm' title='Lunch' className='col-span-2 col-start-3 row-span-1' />
              <Block time='2pm - 3pm' title='Mike & Nehal Q&A' className='col-span-2 col-start-3 row-span-1' />
              <Block time='4:30pm - 5:30pm' title='Opening Ceremony'
                     className='col-span-2 col-start-1 row-span-1 row-start-5' />
              <Block time='6pm' title='Hacking Starts'
                     className='col-span-2 col-start-1 row-span-1 row-start-6' />
              <Block time='6pm' title='Hacking Ends'
                     className='col-span-2 col-start-3 row-span-1 row-start-6' />
              <Block time='6pm - 7pm' title='Mixer'
                     className='col-span-2 col-start-1 row-span-1 row-start-7' />
              <Block time='6pm - 7pm' title='Dinner'
                     className='col-span-2 col-start-3 row-span-1 row-start-7' />
              <Block time='7pm - 8pm' title='RoboClub Talk'
                     className='col-span-1 col-start-1 row-span-1 row-start-8' />
              <Block time='7pm - 8pm' title='Algorand Talk'
                     className='col-span-1 col-start-2 row-span-1 row-start-8' />
              <Block time='8pm - 9pm' title='Dinner'
                     className='col-span-2 col-start-1 row-span-1 row-start-8' />
              <Block time='8:30pm - 9:30pm' title='Closing Ceremony'
                     className='col-span-2 col-start-3 row-span-1 row-start-8' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
