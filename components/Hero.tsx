import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-60 bg-gradient-to-b from-transparent via-background/80 to-background"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <div className="opacity-0 translate-y-5 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-[1.2]">
            {heroDetails.heading}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-foreground-accent max-w-2xl mx-auto">
            {heroDetails.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 translate-y-5 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
            <AppStoreButton
              dark
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
            />
            <PlayStoreButton
              dark
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Hero Image */}
          <div className="mt-12 sm:mt-16 opacity-0 translate-y-10 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
            <Image
              src={heroDetails.centerImageSrc}
              width={480}
              height={424}
              quality={100}
              sizes="(max-width: 768px) 100vw, 480px"
              priority={true}
              alt="Finwise App Interface"
              className="relative mx-auto z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
