function Prize({
                 name,
                 description,
                 prize,
                 className,
               }: {
  name: string;
  description: string;
  prize: string;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-gray-700 p-4 rounded-lg flex flex-col justify-between ${className}`}
    >
      <div>
        <h3 className='text-lg text-blue'>{name}</h3>
        <p>{description}</p>
      </div>
      <div className=''>
        <p className='text-sm mt-2 text-right'>{prize}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className='py-16' id='prizes'>
      <div className='flex'>
        <div className='text-beige m-auto'>
          <h3 className='text-2xl mb-4 text-center text-yellow'>Prizes</h3>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 max-w-6xl'>
            <Prize
              name='Scott Krulcik Grand Prize'
              description='Most impressive hack at TartanHacks 2023'
              prize='$2000'
            />
            <Prize
              name='Most Disruptive: Technology'
              description='Most significant technological innovation that disrupts the status quo.'
              prize='4 × TBD'
            />
            <Prize
              name='Most Disruptive: Product'
              description='Most significant product/business model innovation that disrupts the status quo.'
              prize='4 × TBD'
            />
            <Prize
              name='Best use of Algorand'
              description='Best use of the Algorand protocol.'
              prize='4 × TBD'
            />
            <Prize
              name='Sandia National Labs Award'
              description='Decided by Sandia.'
              prize='4 × Wireless Earphones'
            />
            <Prize
              name='Best use of AI'
              description='Best use of AI.'
              prize='4 × Amazon Echo Dot'
            />
            <Prize
              name='First Penguin Prize'
              description={`Inspired by Randy Pausch's The Last Lecture: “Experience is what you get when you don’t get what you wanted. And it can be the most valuable thing you have to offer.”
Awarded to the team that took the biggest gamble while not meeting its goals… a prize for ‘glorious failure’.`}
              prize='4 × TBD'
              className='row-span-2'
            />
            <Prize
              name='Best Design Hack'
              description='Best product design.'
              prize='4 × The Design of Everyday Things'
            />
            <Prize
              name='DFA Impact Prize'
              description='TODO'
              prize='Entry into DFA Impact, Tote Bags, Herb Kits'
            />
            <Prize
              name='Spiciest Meme'
              description='Spiciest meme in the #memes Discord channel.'
              prize='What do you meme? card game'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
