import React from "react";
import { Cardo } from "next/font/google";
import styles from "./styles/turnkeyheading.module.css";
import SvgText from "./svgText/svgText";

import dynamic from "next/dynamic";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function TurnkeyHeading() {
  return (
    <section className={styles.turnkeyHeadingContainer}>
      <p>TURNKEY</p>
      <h1 className={`${cardo.className}`}>HIGH-END INTERIORS & EXTERIORS </h1>
      <SvgText />
    </section>
  );
}
