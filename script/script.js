/* =================== Start toggle style ==================== */
const styleSwitcherToggle = document.querySelector(".style-swither-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-swither").classList.toggle("open");
});
//  hide style swicher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-swither").classList.contains("open")) {
    document.querySelector(".style-swither").classList.remove("open");
  }
});
/* =================== End toggle style ==================== */
/* =================== Start themes colors ================= */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* =================== End themes colors ==================== */

/* ================ theme light and dark  mode  ============== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
/* ================ theme light and dark  mode  ============== */
/* ==========   typeing animation   =============  */
let typed = new Typed(".typing", {
  strings: ["", "Web Developer", "Frontend Developer", "JavaScript", "HtmlCss"],
  typeSpeed: 100,
  backSpeed: 60,
  fadeOut: true,
  loop: true,
});

/* ================ Aside ============== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totaLNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totaLNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totaLNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionnavTogglerBtn()
    }
  });
}

function removeBackSection(){
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num){
  allSection[num].classList.add("back-section")
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
  for (let i = 0; i < totaLNavList; i++) {
    navList[i].querySelector("a").classList.remove("active")
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active")
    }
  }
}
/* ******* navToggler ******* */
document.querySelector(".hire-me").addEventListener("click",function(){
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionnavTogglerBtn();
});

function asideSectionnavTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
