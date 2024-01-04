import Image from "next/image";
import Contact from "./Contact/Contact";
import styles from "./styles/connect.module.css";

import SlideText from "../../common/slideText/SlideText";
import { cardo } from "@/lib/font";

export default function Connect() {
  const letters = {
    gatsby: ["G", "A", "T", "S", "B", "Y"],
    home: ["H", "O", "M", "E"],
    fragrance: ["F", "R", "G", "R", "A", "N", "C", "E"],
  };

  return (
    <div className={styles.connectContainer}>
      <Contact />
      <div className={styles.about}>
        <p>Inspired by the work we do?</p>
        <p>
          We would be honoured to assist you in designing your ideal interior!
        </p>
      </div>

      <div className={styles.fragranceContainer}>
        <div className={styles.fragranceImageCOntainer}>
          <Image
            src={"/images/getintouch/fragrance.jpg"}
            width={470}
            height={745}
            alt="fragrance_image"
            className={styles.fragranceImage}
          />
        </div>

        <div className={`${styles.fragranceAboutContainer} ${cardo.className}`}>
          <div className={styles.title}>
            <SlideText letters={letters.gatsby} />
          </div>
          <div className={styles.title}>
            <SlideText letters={letters.home} />
          </div>
          <div className={styles.title}>
            <SlideText letters={letters.fragrance} />
          </div>

          <div className={styles.dividerContainer}>
            <hr className={styles.divider} />

            <p>AVAILABLE NOW</p>
          </div>

          <p className={styles.about}>
            The home fragrance provided is rich and raw, powerful and luxurious.
            A smell that lingers in your mind and memory. Sensual and smoky,
            cosmopolitan and masculine.
          </p>
        </div>
      </div>
    </div>
  );
}
