import { cardo } from "@/lib/font";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
