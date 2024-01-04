import Image from "next/image";
import styles from "./styles/ourteam.module.css";

export default function OurTeam() {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <p className="sectionStart">OUR TEAM</p>
      <div className={styles.outTeamContainer}>
        <div className={styles.profile}>
          <Image
            src={"/images/about/profileOne.jpg"}
            height={362}
            width={268}
            alt="profile"
          />
          <p className={styles.role}>Interior Designer</p>
          <p className={styles.name}>KARIM UDDIN</p>
        </div>

        <div className={styles.profile}>
          <Image
            src={"/images/about/profileTwo.jpg"}
            height={362}
            width={268}
            alt="profile"
          />
          <p className={styles.role}>Web Developer</p>
          <p className={styles.name}>ABDUL LATIF</p>
        </div>
      </div>
    </div>
  );
}
