import { cardo } from "@/lib/font";
import styles from "./styles/whatwedo.module.css";
import SvgText from "./svgText/SvgText";

export default function WhatWeDo() {
  return (
    <div className={styles.studioContainer}>
      <p className="sectionStart">WHAT WE DO</p>

      <div className={styles.titleContainer}>
        <SvgText />
        <h1 className={`${styles.title} ${cardo.className}`}>STUDIO</h1>
      </div>

      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          NATIONWIDE TURNKEY INTERIOR | ELECTRICAL | CIVIL | AUTOMATION & IT
          PROJECTS
        </p>
        <p className={styles.footerText}>
          DREAM WINGS INTERNATIONAL IS A PREMIUM TURNKEY EXECUTOR
        </p>
        <p className={styles.footerText}>*TERMS & CONDITIONS APPLIED</p>
      </div>

      <p className={`${styles.madeWith} ${cardo.className}`}>
        Made with ❤️ by{" "}
        <a
          href="https://suhravhussen.xyz"
          target="_blank"
          style={{
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Suhrav
        </a>
      </p>
    </div>
  );
}
