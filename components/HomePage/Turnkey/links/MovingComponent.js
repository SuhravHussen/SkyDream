import MovingText from "react-moving-text";

export default function MovingComponent({ letters }) {
  return letters.map((letter, index) => (
    <MovingText
      key={index}
      type="fadeIn"
      duration="1000ms"
      delay={index * 100 + "ms"}
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none"
    >
      {letter}
    </MovingText>
  ));
}
