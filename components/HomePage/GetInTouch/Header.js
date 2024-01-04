"use client";

import { cardo } from "@/lib/font";

import styles from "./styles/header.module.css";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef } from "react";
import SlideText from "../../common/slideText/SlideText";
import SvgText from "./svgText/SvgText";

export default function Header() {
  const letters = {
    lets: ["L", "E", "T", "'", "S"],
    work: ["W", "O", "R", "K"],
    together: ["T", "O", "G", "T", "H", "E", "R"],
  };

  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 1,
  });

  return (
    <div className={styles.headerContainer}>
      <p className="sectionStart" ref={ref}>
        GET IN TOUCH
      </p>
      {entry?.isIntersecting && (
        <div className={`${styles.heading} ${cardo.className}`}>
          <div className={`${styles.singleLine} ${styles.lineOne}`}>
            <SlideText letters={letters.lets} />
          </div>
          <div className={`${styles.singleLine} ${styles.lineTwo}`}>
            <SlideText letters={letters.work} start={1} />
          </div>
          <div className={`${styles.singleLine} ${styles.lineThree}`}>
            <SlideText letters={letters.together} start={2} />
            <SvgText delay={3000} />
          </div>
        </div>
      )}
    </div>
  );
}
