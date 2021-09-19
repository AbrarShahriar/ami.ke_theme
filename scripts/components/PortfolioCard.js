export default function PortfolioCard({ imgSrc, tag, title, id = 0 }) {
  return `
    <div class="grid-item all_works ${tag[1]}">
      <a href="./work.html?id=${id}">
        <img
          src="${imgSrc}"
          alt="${title}"
        />
        <div class="overview">
          <span class="tag">${tag[0]}</span>
          <h2>${title}</h2>
        </div>
      </a>
    </div>
    `;
}
