"use client";

import React from "react";
import { motion } from "framer-motion";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import ChangingText from "./ChangingText";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-background bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-60 bg-gradient-to-b from-transparent via-background/80 to-background"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <div className="opacity-0 translate-y-5 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto flex flex-col">
              <div className="flex flex-col justify-center">
                <ChangingText
                  options={heroDetails.changingTextOptions.questions}
                  interval={7000}
                  className="text-secondary"
                />
              </div>
            </div>

            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground-accent mx-auto flex items-center justify-center flex-wrap">
              <span>sorunu yaşayan </span>
              <ChangingText
                options={heroDetails.changingTextOptions.audiences}
                className="inline-block mx-2 text-secondary"
                interval={4200}
              />
              <span>için.</span>
            </p>
          </div>

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
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]">
        <p className="text-sm text-foreground/60 mb-2">
          Keşfetmek için kaydırın
        </p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground/60"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
