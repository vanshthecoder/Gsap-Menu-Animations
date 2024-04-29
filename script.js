var startingIcon = document.querySelector("#nav i");
var endingIcon = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#nav h2", {
  // y:20,
  scale: 2,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

function animation() {
  tl.to("#full", {
    right: 0,
    duration: 0.5,
  });
  tl.from("#full h4", {
    x: 150,
    duration: 0.4,
    stagger: 0.3,
    opacity: 0,
  });

  tl.from("#full i", {
    opacity: 0,
  });
  tl.pause();

  startingIcon.addEventListener("click", function () {
    tl.play();
  });

  endingIcon.addEventListener("click", function () {
    tl.reverse();
  });
}

animation();
