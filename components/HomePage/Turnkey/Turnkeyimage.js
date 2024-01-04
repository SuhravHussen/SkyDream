import Image from "next/image";
import styles from "./styles/turnkeyimage.module.css";
export default function Turnkeyimage() {
  return (
    <section className={styles.imageContainer}>
      <Image
        src={"/images/turnkey/turnkey.webp"}
        height={534}
        width={800}
        alt="image"
        className={styles.imageOne}
      />
      <Image
        src={"/images/turnkey/turnkey2.png"}
        height={611}
        width={538}
        alt="image"
        className={styles.imageTwo}
      />
    </section>
  );
}
