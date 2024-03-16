import React from 'react';
import SemiCircle from '../svg/SemiCircle';
import RoundHills from '../svg/RoundHills';
import SpikyHills from '../svg/SpikyHills';
import Lines from '../svg/Lines';
import SpeakersTitle from '../svg/SpeakersTitle';

export default function Speakers() {
  return (
    <section
      className="pb-16 pt-48 text-white m-auto font-bold flex flex-col gap-24 text-center border-b-4 w-2/3 -mb-36"
      id="speakers"
    >
      <div className="w-full mx-auto">
        <SpeakersTitle />
      </div>
      <div className="flex-col md:flex-row flex gap-12 md:gap-24">
        <div className="overflow-visible flex-none w-full md:max-w-[196px]">
          <div className="relative">
            <div className="-z-10 relative w-full">
              <img src="/speakers/po.jpg" alt="Po Shen Loh" />
            </div>
            <div className="absolute top-[-80px] left-[-60px]">
              <RoundHills />
            </div>
            <div className="absolute top-[-40px] ">
              <SemiCircle />
            </div>
          </div>
        </div>
        <div className="flex-0 text-left">
          <h2 className="text-3xl font-extrabold font-sans">Po Shen Loh</h2>
          <p className="text-yellow font-thin leading-5 text-sm">
            Professor @ CMU, Head Coach @ USA International Math Olympiad Team
          </p>
          <p className="font-thin mt-6">
            Po-Shen Loh is a social entrepreneur and inventor, working across
            the spectrum of mathematics, education, and healthcare, all around
            the world. He has pioneered innovations ranging from a scalable way
            to{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://live.poshenloh.com/"
            >
              learn challenging math live online
            </a>{' '}
            at comparable engagement to live-streaming entertainment, to a new
            way to{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://www.straitstimes.com/tech/tech-news/us-prof-keen-to-work-with-spore-on-app-that-warns-users-before-they-are-exposed-to"
            >
              control pandemics by leveraging self-interest
            </a>
            . He has earned academic distinctions ranging from an International
            Mathematical Olympiad silver medal to the{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://trumpwhitehouse.archives.gov/briefings-statements/president-donald-j-trump-announces-recipients-presidential-early-career-award-scientists-engineers/"
            >
              United States Presidential Early Career Award for Scientists and
              Engineers
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex-col md:flex-row flex gap-12 md:gap-24">
        <div className="overflow-visible flex-none w-full md:max-w-[196px]">
          <div className="relative">
            <div className="-z-10 relative w-full">
              <img src="/speakers/yaser.jpg" alt="Yaser Sheikh" />
            </div>
            <div className="absolute top-[-20px] right-[-70px]">
              <SpikyHills />
            </div>
            <div className="absolute bottom-[-80px] right-[-100px]">
              <Lines />
            </div>
          </div>
        </div>
        <div className="flex-0 text-left">
          <h2 className="text-3xl font-extrabold font-sans">Yaser Sheikh</h2>
          <p className="text-pink font-thin leading-5 text-sm">
            VP of Research @ Meta, Founding Director of Meta Reality Lab,
            Pittsburgh
          </p>
          <p className="font-thin mt-6">
            Yaser Sheikh is devoted to achieving photorealistic social
            interactions in augmented and virtual reality. He is a consulting
            professor at the Robotics Institute, CMU, where he directed the
            Perceptual Computing Lab producing OpenPose and the Panoptic Studio.
            His research broadly focuses on machine perception and rendering of
            social behavior, spanning sub disciplines in computer vision,
            computer graphics, and machine learning. He has served as an
            associate editor for the IEEE Transactions on Pattern Analysis and
            Machine Intelligence (PAMI) and has regularly served as a senior
            program committee member for SIGGRAPH, CVPR, and ICCV. His research
            has been featured by various news and media outlets including The
            New York Times, BBC, CBS, WIRED, and The Verge. With colleagues and
            students, he has won the Hillman Fellowship (2004), Honda
            Initiation Award (2010), Popular Science&apos;s &quot;Best of What&apos;s
            New Award (2014), as well as several conference best paper
            and demo awards (CVPR, ECCV, WACV, ICML).
          </p>
        </div>
      </div>
    </section>
  );
}
