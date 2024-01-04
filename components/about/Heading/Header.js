import React from "react";
import styles from "./styles/heading.module.css";
import { cardo } from "@/lib/font";
import SvgText from "./SvgText/SvgText";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className="sectionStart">ABOUT US</p>
      <h1 className={`${styles.headerText} ${cardo.className}`}>ESTEEMED</h1>
      <h1 className={`${styles.headerText} ${cardo.className}`}>
        INTERNATIONAL
      </h1>
      <h1 className={`${styles.headerText} ${cardo.className}`}>DESIGNER</h1>
      <SvgText />

      <p className={styles.intro}>
        A high-end interior design studio based in Ranchi, Jharkhand. Sky Dream
        International targets an elite and sophisticated nationwide clientele
        with its entire range of bespoke interior design services. Private
        homes, real estate complexes, and hotels are just a few of the projects.
      </p>
    </div>
  );
}
