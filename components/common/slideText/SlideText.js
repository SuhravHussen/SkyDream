"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./slidetext.module.css";
import { useIntersectionObserver } from "usehooks-ts";

export default function SlideText({ letters, delay = 0.2, start = 0 }) {
  const id = "id_" + Math.random().toString(36).substr(2, 9);

  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0.2,
  });

  useLayoutEffect(() => {
    if (entry?.isIntersecting) {
      const spans = document.querySelectorAll(`#${id} span`);
      spans.forEach((span, index) => {
        span.style.animation = `slideIn 0.5s ease-out forwards`;
        span.style.animationDelay = `${start + index * delay}s`;
      });
    }
  }, [entry, id]);

  return (
    <p ref={ref} id={id} className={styles.slideText}>
      {letters.map((letter, ind) => (
        <span key={ind}>{letter}</span>
      ))}
    </p>
  );
}
