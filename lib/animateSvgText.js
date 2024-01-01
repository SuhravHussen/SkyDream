function startSvgAnimation(className, duration = 0.5) {
  const paths = document.querySelectorAll(`.${className}`);

  let currentIndex = 0;

  function animateNextPath() {
    if (currentIndex < paths.length) {
      const path = paths[currentIndex];

      var length = path.getTotalLength();

      path.style.transition = path.style.WebkitTransition = "none";
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();

      path.style.transition =
        path.style.WebkitTransition = `stroke-dashoffset ${duration}s ease-in-out 0s`;
      path.style.opacity = 1;
      path.style.strokeDashoffset = "0";

      path.addEventListener("transitionend", () => {
        currentIndex++;
        animateNextPath();
      });
    }
  }

  animateNextPath();
}

export default startSvgAnimation;
