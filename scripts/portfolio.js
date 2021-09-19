import PortfolioCard from "./components/PortfolioCard.js";
import SectionHeader from "./components/SectionHeader.js";
import { dispatch } from "./state/stateManagement.js";
import { portfolioCardData } from "./utils/data.js";
import { selector, selectorAll } from "./utils/DOM.js";

import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

//-----------HEADER MENU--------------//

const menuCheck = selector("#menu");
const menu = selector(".menu__body");
menuCheck.addEventListener("change", () => {
  let checked = menuCheck.checked;
  console.log(menu.scrollHeight);

  if (checked) {
    menu.style.maxHeight = `100vh`;
    menu.style.padding = `0px 20px 20px 20px`;
  } else {
    menu.style.maxHeight = `0px`;
    menu.style.padding = `0px`;
  }
});

//-----------HEADER--------------//
const header = selector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    header.classList.add("header__style__onScroll");
    menu.classList.add("menu__active");
  } else {
    header.classList.remove("header__style__onScroll");
    menu.classList.remove("menu__active");
  }
});

//-----------PORTFOLIO HEADER-------------//
const portfolio = selector(".portfolio");
portfolio.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "",
    title: "Portfolio <br> Showcase",
    desc: "We’re a WordPress Theme Development company . With more than ten years of knowledge and expertise.",
  })
);

//------PORTFOLIO HEADER OPTIONS-------//
const portfolioOptions = selectorAll(".option");

portfolioOptions.forEach((el, i) => {
  el.addEventListener("click", (ev) => {
    el.classList.add("option_active");
    dispatch({
      type: "UPDATE_PORTFOLIO_STATE",
      portfolioState: el.dataset.filter,
    });

    removeActiveClassFromAllExcept(i);
    iso.arrange({ filter: el.dataset.filter });
  });
});

function removeActiveClassFromAllExcept(index) {
  for (let i = 0; i < portfolioOptions.length; i++) {
    if (i !== index) {
      portfolioOptions[i].classList.remove("option_active");
    }
  }
}

//------PORTFOLIO BODY MASONARY-------//
var grid = selector(".grid");

portfolioCardData.map(({ imgSrc, title, tag }, i) => {
  grid.innerHTML += PortfolioCard({ imgSrc, title, tag, id: i });
});

var iso = new Isotope(grid, {
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    columnWidth: ".grid-sizer",
  },
});

imagesLoaded(grid).on("progress", () => iso.layout());
