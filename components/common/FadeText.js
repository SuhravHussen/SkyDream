"use client";

import MovingText from "react-moving-text";

export default function FadeText({ letters, duration = 1000 }) {
  return letters.map((letter, index) => {
    return letter === " " ? (
      <span
        key={index}
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
      ></span>
    ) : (
      <MovingText
        key={index}
        type="fadeIn"
        duration={`${duration}ms`}
        delay={index * 100 + "ms"}
        direction="normal"
        timing="linier"
        iteration="infinite"
        fillMode="forwards"
      >
        {letter}
      </MovingText>
    );
  });
}
