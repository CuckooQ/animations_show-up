import gsap from "gsap";

function showUp() {
  const showUpEls = document.querySelectorAll(".show-up");
  showUpEls.forEach((showUpEl, idx) => {
    gsap.to(showUpEl, 1, {
      delay: .7 * (idx + 1),
      opacity: 1,
    });
  });
}

showUp();