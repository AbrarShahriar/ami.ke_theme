import SocialLink from "./components/SocialLink.js";
import ServiceCard from "./components/ServiceCard.js";
import { selector, selectorAll } from "./utils/DOM.js";
import {
  blogData,
  portfolioCardData,
  pricingCardsData,
  reviewsData,
  servicesCardData,
  skillsData,
  socialLinksData,
  totalWorksData,
} from "./utils/data.js";
import SectionHeader from "./components/SectionHeader.js";
import SectionHeaderV2 from "./components/SectionHeaderV2.js";
import SkillBar from "./components/SkillBar.js";
import PortfolioCard from "./components/PortfolioCard.js";
import { dispatch, initState } from "./state/stateManagement.js";
import PricingCard from "./components/PricingCard.js";
import TotalWork from "./components/TotalWork.js";
import ReviewCard from "./components/ReviewCard.js";
import BlogCard from "./components/BlogCard.js";
import { ScrollObserver } from "./utils/scrollObserver.js";

import AOS from "aos";
import $ from "jquery";
import counterUp from "counterup2";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import slick from "slick-carousel";

window.onload = function () {
  AOS.init({
    once: true,
    duration: 1500,
  });

  $(".reviews_body").slick({
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    mobileFirst: true,
  });

  const scrollObserver = new ScrollObserver({
    root: document.getElementById("content"),
    rootMargin: "0px",
    threshold: 0,
  });
  scrollObserver.observe({
    elements: document.querySelectorAll("#countUp"),
    onElVisible: (observedEl) => {
      const els = selectorAll("#countUp");
      els.forEach((el) =>
        counterUp(el, {
          duration: 2000,
        })
      );
    },
  });
};

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

  //scroll to top button
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
});

//-----------SCROLL TO TOP--------------//
//Get the button:
const mybutton = document.getElementById("scrollToTop");
mybutton.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-----------SOCIAL lINKS--------------//
const socialLinks = selector(".social_links");

socialLinksData.map(({ link, Icon }) => {
  socialLinks.innerHTML += SocialLink({ link, Icon });
});

//-----------SERVICES CARD--------------//
const servicesContainer = selector(".services_cards");

servicesCardData.map(({ title, Icon, desc }) => {
  servicesContainer.innerHTML += ServiceCard({ title, desc, Icon });
});

//-----------SERVICES HEADER--------------//
const services = selector(".services");
services.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "Services",
    title: "My Services",
    desc: "We help forward-looking business owners reinvent their brand visually. Our partners enjoy high quality designs, fully customized to fit their brand vision",
  })
);

//-----------ABOUT HEADER--------------//
const about = selector(".about");
about.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "",
    title: "About Me",
    desc: "",
  })
);

//-----------SKILLS HEADER--------------//
const skills = selector(".skills > .container");
skills.insertAdjacentHTML(
  "afterbegin",
  SectionHeaderV2({
    tag: "I'M EXPERT ON",
    title: "Let's Work Together",
    desc: "Ready to discuss your next design project? <br> Let's Talk! <br><br> We will get back to you as soon as possible. <br> Looking forward to creating something awesome for you!",
    btnName: "Learn More",
  })
);

//-----------SKILLS--------------//
const skillsContainer = selector(".skills_container");

skillsData.map(({ title, value }) => {
  skillsContainer.innerHTML += SkillBar({ title, value });
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

portfolioCardData.map(({ imgSrc, title, tag }) => {
  grid.innerHTML += PortfolioCard({ imgSrc, title, tag });
});

var iso = new Isotope(grid, {
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    columnWidth: ".grid-sizer",
  },
});

imagesLoaded(grid).on("progress", () => iso.layout());

//-----------PRICING HEADER-------------//
const pricing = selector(".pricing");
pricing.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "CHOOSE A PLAN",
    title: "Pricing Plan",
    desc: "",
  })
);

//-----------PRICING CARDS-------------//
const pricingCards = selector(".pricing_cards");
pricingCardsData.map(({ title, price, services, recommended }) => {
  pricingCards.innerHTML += PricingCard({
    title,
    price,
    recommended,
    services,
  });
});

//-----------TOTAL WORKS-------------//
const totalWorksContainer = selector(".total_works > .container");
totalWorksData.map(({ title, amount, Icon }, index) => {
  totalWorksContainer.innerHTML += TotalWork({ title, Icon, amount, index });
});

//-----------REVIEWS HEADER--------------//
const reviewsContainer = selector(".reviews > .container");

reviewsContainer.insertAdjacentHTML(
  "afterbegin",
  SectionHeaderV2({
    tag: "Our Testimonials",
    title: "Happy Clients Says",
    desc: "",
    btnName: "Learn More",
    aos: "fade-right",
  })
);

//-----------REVIEWS SWAP--------------//
const reviewsBody = selector(".reviews_body");
reviewsData.map(({ userImg, userProfession, username, reviewBody, rating }) => {
  reviewsBody.innerHTML += ReviewCard({
    userImg,
    userProfession,
    username,
    reviewBody,
    rating,
  });
});

//-----------BLOGS HEADER-------------//
const blogs = selector(".blogs");
blogs.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "Latest Post",
    title: "Latest blog",
    desc: "",
  })
);

//-----------BLOG CARDS-------------//

const blogCards = selector(".blog_cards");
blogData.map(({ title, poster, imgSrc, date, comments }) => {
  blogCards.innerHTML += BlogCard({ title, poster, imgSrc, date, comments });
});

//-----------CONTACT HEADER-------------//
const contact = selector(".contact");
contact.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "Have Any Project?",
    title: "Contact Me",
    desc: "",
  })
);
