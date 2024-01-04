import { Sacramento } from "next/font/google";
import styles from "./logo.module.css";
import Link from "next/link";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Logo() {
  return (
    <Link href={"/"} className={styles.logoContainer}>
      <h3 className={`${sacramento.className}  ${styles.logoText}`}>
        Sky Dream
      </h3>
    </Link>
  );
}
