"use client";

import Link from "next/link";
import styles from "../styles/contact.module.css";
import FadeText from "@/components/common/FadeText";

export default function Contact() {
  const words = {
    message: [
      "S",
      "E",
      "N",
      "D",
      " ",
      "U",
      "S",
      " ",
      "A",
      " ",
      "M",
      "E",
      "S",
      "S",
      "A",
      "G",
      "E",
    ],

    number: [
      "C",
      "A",
      "L",
      "L",
      " ",
      "+",
      "8",
      "8",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "8",
      "1",
    ],
  };

  return (
    <section className={styles.contactContainer}>
      <div className={styles.singleContact}>
        <FadeText letters={words.message} duration={4000} />
      </div>

      <div className={styles.singleContact}>
        <FadeText letters={words.number} duration={4000} />
      </div>
    </section>
  );
}
