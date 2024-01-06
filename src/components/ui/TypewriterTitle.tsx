"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("All in one notebook.")
          .pauseFor(300)
          .deleteAll()
          .typeString("AI-Powered text insights.")
          .pauseFor(300)
          .deleteAll()
          .typeString("Enhanced productivity.")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
