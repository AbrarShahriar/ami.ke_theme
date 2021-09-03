export default function PortfolioCard({ imgSrc, tag, title }) {
  return `
    <div class="grid-item all_works ${tag[1]}">
        <img
          src="${imgSrc}"
          alt="${title}"
        />
        <div class="overview">
          <span class="tag">${tag[0]}</span>
          <h2>${title}</h2>
        </div>
    </div>
    `;
}
