const hamb = document.getElementById("hamburger");
const navMobile = document.getElementById("responsiveLinks");
const overlay = document.getElementById("overlay");
let menuOpen;
const navLinks = document.getElementsByClassName("rLinks");
for (let i of navLinks) {
  i.addEventListener("click", () => {
    navMobile.classList.remove("active");
    navMobile.classList.remove("active");
    hamb.classList.remove("toggle");
    overlay.classList.remove("blur");
  });
}
hamb.addEventListener("click", () => {
  hamb.classList.toggle("toggle");
  navMobile.classList.toggle("active");
  overlay.classList.toggle("blur");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 400) {
    navMobile.classList.remove("active");
    hamb.classList.remove("toggle");
    overlay.classList.remove("blur");
  }
});
