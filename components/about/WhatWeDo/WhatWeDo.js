import Image from "next/image";
import styles from "./styles/whatwedo.module.css";

export default function WhatWeDo() {
  return (
    <div className={styles.whatwedoContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/about/whatwedo.jpg"}
          height={750}
          width={500}
          alt="what_we_do"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.dividerContainer}>
          <hr className={styles.divider} /> <p>WHAT WE DO</p>
        </div>
        Sky Dream International was established in 2007 by Indian interior
        designer Ram Sharma who acquired his extensive background in design from
        working on numerous luxury projects all around the world -from Delhi to
        Pune, Kolkata to Mumbai, Bangalore to Noida. We have been consistently
        profitable since inception. We provide wide range of solutions and
        professional services across areas such as Interior Designing &
        Furnishing, Electrical Works, Civil Works, Data Center, Networking,
        Cyber Security. We have a proven track record across enterprises as well
        as mid-market customers in verticals such as BFSI, Manufacturing,
        Automobile, Healthcare and IT/I sectors. We at dream wings international
        also have designing, web development, mac/linux and autocad solution in
        our arsenal. Our team is well trained for troubleshooting any issue
        detected in CCTV, Networking, Router or any software. We also provide
        different types of server solutions like Exchange, Backup, ERP,
        Firewall, Cloud Server and VMware solutions.
      </div>
    </div>
  );
}
