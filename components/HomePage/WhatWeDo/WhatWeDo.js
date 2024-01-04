import { cardo } from "@/lib/font";
import styles from "./styles/whatwedo.module.css";
import SvgText from "./svgText/SvgText";
import Footer from "@/components/common/Footer/Footer";

export default function WhatWeDo() {
  return (
    <div className={styles.studioContainer}>
      <p className="sectionStart">WHAT WE DO</p>

      <div className={styles.titleContainer}>
        <SvgText />
        <h1 className={`${styles.title} ${cardo.className}`}>STUDIO</h1>
      </div>

      <Footer />
    </div>
  );
}
