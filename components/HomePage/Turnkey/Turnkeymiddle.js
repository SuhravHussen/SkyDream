import Links from "./links/Links";
import styles from "./styles/turnkeymiddle.module.css";

export default function Turnkeymiddle() {
  return (
    <section className={styles.turnkeyMiddleContainer}>
      <p>
        Sky Dream International offers a full range of bespoke interior design
        services —from initial concept and aesthetic counselling to
        coordination, execution and magazine-worthy finishing touches.
      </p>
      <Links />
    </section>
  );
}
