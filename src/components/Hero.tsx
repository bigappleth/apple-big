import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
  >
    {/* Background Grid */}
    <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
      <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
    <div className="text-center">
      <div className="-mt-12 md:-mt-10">
        {/* Headings for mobile only */}
        <div className="md:hidden space-y-2">
          {[heroDetails.heading1, heroDetails.heading2, heroDetails.heading3].map((heading, idx) => (
            <h2
              key={idx}
              className="text-3xl md:text-4xl leading-tight font-semibold text-foreground max-w-lg md:max-w-2xl mx-auto"
            >
              {heading}
            </h2>
          ))}
        </div>
        {/* Center Image */}
        <div>
          <Image
            src={heroDetails.centerImageSrc}
            width={1700}
            height={900}
            quality={100}
            sizes="(max-width: 1200px) 100vw, 800px"
            priority
            unoptimized
            alt="app mockup"
            className="relative mx-auto z-10 rounded-md"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
