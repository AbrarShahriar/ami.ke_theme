import SocialLink from "./components/SocialLink.js";
import ServiceCard from "./components/ServiceCard.js";
import { selector, selectorAll } from "./utils/DOM.js";
import {
  blogData,
  portfolioCardData,
  pricingCardsData,
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit dolore ",
  })
);

//-----------ABOUT HEADER--------------//
const about = selector(".about");
about.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "",
    title: "About Me",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  })
);

//-----------SKILLS HEADER--------------//
const skills = selector(".skills > .container");
skills.insertAdjacentHTML(
  "afterbegin",
  SectionHeaderV2({
    tag: "I'M EXPERT ON",
    title: "Let's Work Together",
    desc: "Phasellus accumsan scelerisque dolor, quis mattis justo bibendumnon. Nulla sollicitudin turpis in enim elementum varius. Vestibulumante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
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
totalWorksData.map(({ title, amount, Icon }) => {
  totalWorksContainer.innerHTML += TotalWork({ title, Icon, amount });
});

//-----------REVIEWS HEADER--------------//
const reviewsContainer = selector(".reviews > .container");

reviewsContainer.insertAdjacentHTML(
  "afterbegin",
  SectionHeaderV2({
    tag: "Our Testimonials",
    title: "Happy Clients Says",
    desc: "Phasellus accumsan scelerisque dolor, quis mattis justo  varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae <br><br> enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    btnName: "Learn More",
  })
);

//-----------REVIEWS SWAP--------------//
const reviewsBody = selector(".reviews_body");
reviewsBody.innerHTML = ReviewCard(initState.reviews[0]);

const reviewButtonGroup = selectorAll(".action");
const reviewsBody_p = selector(".review_text_container > p");
const reviewsBody_username = selector(".review_user_actions p");
const reviewsBody_avatarImg = selector(".avatar img");
console.log(reviewsBody_avatarImg);

const reviewsBody_profession = selector(".info .profession");

let c = 1;
reviewButtonGroup.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    c = c * -1;
    if (c === 1) {
      let i = 0;
      reviewsBody_p.innerText = initState.reviews[i].reviewBody;
      reviewsBody_username.innerText = initState.reviews[i].username;
      reviewsBody_avatarImg.src = initState.reviews[i].userImg;
      reviewsBody_profession.innerText = initState.reviews[i].userProfession;
    } else {
      let i = 1;
      reviewsBody_p.innerText = initState.reviews[i].reviewBody;
      reviewsBody_username.innerText = initState.reviews[i].username;
      reviewsBody_avatarImg.src = initState.reviews[i].userImg;
      reviewsBody_profession.innerText = initState.reviews[i].userProfession;
    }
  });
});

//-----------BLOGS HEADER-------------//
const blogs = selector(".blogs");
blogs.insertAdjacentHTML(
  "afterbegin",
  SectionHeader({
    tag: "Latest Post",
    title: "Latest blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
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
    tag: "Have Any Query?",
    title: "Contact Me",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  })
);
