import { Cardo } from "next/font/google";
import styles from "./styles/hero.module.css";
import SvgText from "./svgText/svgText";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={`${cardo.className} ${styles.title} ${styles.titleOne}`}>
        SKY
      </h1>
      <h1 className={`${cardo.className}  ${styles.title} ${styles.titleTwo}`}>
        DREAM
      </h1>
      <SvgText />
    </div>
  );
}
