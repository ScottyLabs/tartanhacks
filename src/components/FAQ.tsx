import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function FAQDisclosure({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 pt-3 pb-1 text-left text-md hover:text-yellow">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-400 max-w-3xl">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function FAQList() {
  return (
    <div className="w-full">
      <FAQDisclosure
        question="Will TartanHacks be in-person this year?"
        answer="Yes."
      />
      <FAQDisclosure
        question="How much does it cost to participate in TartanHacks?"
        answer="Nothing. TartanHacks is free for all undergraduate students!"
      />
      <FAQDisclosure
        question="I'm not a CS major, can I still join?"
        answer="Yes! All undergraduate majors and programs, even if they aren't technical, are welcome at TartanHacks. We have slides from a series of web development workshops online that you can use to brush up your skills! We'll also have some workshops during the event so you can get started with new frameworks."
      />
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="py-16 pb-40" id="faq">
      <div className="text-beige m-auto">
        <h3 className="text-2xl mb-4 text-center text-yellow">FAQs</h3>
        <div className="max-w-4xl m-auto">
          <FAQList />
        </div>
      </div>
    </div>
  );
}
