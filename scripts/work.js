import WorkLayout from "./components/WorkLayout";
import { portfolioCardData } from "./utils/data";
import { selector } from "./utils/DOM";

document.body.style.width = "100vw";
document.body.style.height = "100vh";

window.onload = function () {
  document.body.style.width = "100%";
  document.body.style.height = "max-content";
  selector(".loader_container").style.display = "none";
  //-----------HEADER MENU--------------//
  const menuCheck = selector("#menu");
  const menu = selector(".menu__body");
  menuCheck.addEventListener("change", () => {
    let checked = menuCheck.checked;

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

  //-----------URL PARAMS--------------//
  const currentUrlString = window.location.href;
  const url = new URL(currentUrlString);
  const currentId = url.searchParams.get("id");

  const currentWork = portfolioCardData[currentId];

  const workContainer = selector(".work");

  workContainer.innerHTML = WorkLayout({
    src: currentWork.imgSrc,
    title: currentWork.title,
    tag: currentWork.tag,
    desc: currentWork.desc || "",
    otherPhotos: null,
  });
};
