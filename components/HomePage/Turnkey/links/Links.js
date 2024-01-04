"use client";

import Link from "next/link";
import styles from "../styles/links.module.css";
import FadeText from "@/components/common/FadeText";

export default function Links() {
  const words = {
    studio: ["S", "T", "U", "D", "I", "O"],
    work: ["W", "O", "R", "K"],
    contact: ["C", "O", "N", "T", "A", "C", "T"],
  };

  return (
    <section className={styles.linksContainer}>
      <Link href={"/studio"} className={styles.aTag}>
        <div className={styles.singleLink}>
          <FadeText letters={words.studio} />
        </div>
      </Link>

      <Link href={"/work"} className={styles.aTag}>
        <div className={styles.singleLink}>
          <FadeText letters={words.work} />
        </div>
      </Link>
      <Link href={"/contact"} className={styles.aTag}>
        <div className={styles.singleLink}>
          <FadeText letters={words.contact} />
        </div>
      </Link>
    </section>
  );
}
