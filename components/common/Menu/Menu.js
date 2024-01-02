"use client";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import styles from "./menu.module.css";
import Link from "next/link";

export default function Menu() {
  const toggleMenu = () => {
    const menuScreen = document.querySelector(`.${styles.menuScreen}`);
    menuScreen.classList.toggle(styles.open);
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };

  return (
    <>
      <section className={styles.menuContainer}>
        <FiMenu className={styles.menuIcon} onClick={toggleMenu} />
      </section>
      <div className={styles.menuScreen}>
        <IoMdClose className={styles.closeIcon} onClick={toggleMenu} />
        <ul className={styles.menuListContainer}>
          <Link href={"/"} onClick={toggleMenu}>
            <li>HOME</li>
          </Link>
          <Link href={"/studio"} onClick={toggleMenu}>
            <li>STUDIO</li>
          </Link>
          <Link href={"/about"}>
            <li>ABOUT</li>
          </Link>
          <Link href={"/work"}>
            <li>WORK</li>
          </Link>
          <Link href={"/contact"}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
