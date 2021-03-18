const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeClasses = 1;

next.addEventListener("click", () => {
  activeClasses++;

  if (activeClasses > circles.length) { 
    activeClasses = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  activeClasses--;

  if (activeClasses < 1) {
    activeClasses = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idz) => {
    if (idz < activeClasses) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = (actives.length - 1) / actives.length;

  if (activeClasses === 1) {
    prev.disabled = true;
  } else if (activeClasses === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
