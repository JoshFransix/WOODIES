const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

const navMenu = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-item");

const header = document.querySelector("#header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("hamburger-open");
  body.classList.toggle("lock-scroll");
  navMenu.classList.toggle("open");

  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle("fade");
  });
  // navLinks.classList.add("active");
}

navLinks.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("hamburger-open");
  body.classList.remove("lock-scroll");
  navMenu.classList.remove("open");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("fade");
  });
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
// const lines = [lineOne, lineTwo, lineThree];

// var tl = gsap.timeline();

// var toggleMenu = gsap.timeline({ paused: true });
// toggleMenu.reversed(true); // IMPORTANT to set the init state to true

// const nextStateMap = {
//   true: () => {
//     toggleMenu.play();
//     toggleMenu.reversed(false);
//   },
//   false: () => {
//     toggleMenu.reverse();
//     toggleMenu.reversed(true);
//   },
// };

// toggleMenu
//   .to(lineTwo, 0.25, { transformOrigin: "50% 50%", scale: 0 }, 0)
//   .to(lineThree, 0.25, { transformOrigin: "50% 50%" }, "change")
//   .to(lineOne, 0.25, { transformOrigin: "50% 50%" }, "change")
//   .to(lineThree, 0.25, { y: -15 }, 0)
//   .to(lineOne, 0.25, { y: 15 }, 0)
//   .to(lineThree, 0.25, { rotation: -45 }, "cross")
//   .to(lineOne, 0.25, { rotation: 45 }, "cross");

// navLinks.forEach((n) => n.addEventListener("click", closeMenu));

// // Create li element
// lis = document.createElement("li");

// // Create link element
// link = document.createElement("a");

// link.appendChild(document.createTextNode("PRODUCTION"));

// lis.appendChild(link);

// lis.style.cursor = "pointer";
// // Append to ul
// document.querySelector("nav ul.nav-links").appendChild(lis);
