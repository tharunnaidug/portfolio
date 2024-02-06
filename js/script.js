console.log("hello world")
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(" nav a");
const circle = document.getElementsByClassName("cursor");


//Scroll Spy 
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
//  //Disabling Context Menu
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault()
// })


//Animating
var typed = new Typed('#typed', {
  strings: ['"Web Developer" ^500', `"BCA Student"`, `"Tech Enthusiast"`],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Gsap
gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin()
const t = gsap.timeline();

t.from("#title ,.nav2", {
  duration: 1,
  opacity: 0,
  scale: 1,
  ease: "slow",
  stagger: 0.3
})
t.from(`.img img,h3`, {
  y: -50,
  delay: 0.1,
  opacity: 0,
  duration: 2,
  stagger: 0.2
})

// For Skills section
gsap.from("#skills .con1,#skills .con2,#skills .con3,.wrapper .item img", {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  // scrub: 1,
  scrollTrigger: {
    trigger: "#skills .con1",
    scroller: "body",
    // markers: true,
    start: "top 25%"
  },
})
gsap.from(".f,.ff,.fff", {
  opacity: 0,
  duration: 5,
  stagger: 0.3,
  scrub: 1,
  scrollTrigger: {
    trigger: ".f",
    scroller: "body",
    // markers: true,
    start: "top 25%"
  },
})

gsap.from(".social,.others", {
  scrollTrigger: {
    trigger: ".social",
    scroller: "body",
    // markers: true,
    start: "top 45% ",
  },
  opacity: 0,
  duration: 1,
  stagger: 0.2
})
gsap.from(".social .item,.others .item,.end", {
  scrollTrigger: {
    trigger: ".social",
    scroller: "body",
    // markers: true,
    start: "top 45% ",
  },
  opacity: 0,
  duration: 1.5,
  stagger: 0.2
})
//--------------------End of Code Loc=111 ------------------//