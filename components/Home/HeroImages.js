import Image from "next/image";
import styles from "./styles/heroImages.module.css";

export default function HeroImages() {
  return (
    <div className={styles.heroImagesContainer}>
      <Image
        src={"/images/hero/leftOne.webp"}
        alt=" image"
        width={420}
        height={605}
        className={styles.leftOneImage}
      />
      <div className={styles.centeredImages}>
        <Image
          src={"/images/hero/center.webp"}
          alt=" image"
          width={707}
          height={1024}
          className={styles.centerImage}
        />
        <Image
          src={"/images/hero/rightOne.webp"}
          alt=" image"
          width={400}
          height={575}
          className={styles.rightOneImage}
        />
      </div>
      <Image
        src={"/images/hero/rightTwo.jpg"}
        alt=" image"
        width={385}
        height={300}
        className={styles.rightTwoImage}
      />
    </div>
  );
}
