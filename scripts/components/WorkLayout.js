export default function WorkLayout({ src, title, desc, tag, otherPhotos }) {
  return `
    <div class="tags">
        <span>${tag[0]}</span>
    </div>
    <h1>${title}</h1>

    <p>
        ${desc}
    </p>
    <img
        src="${src}"
        alt="${title}"
        class="cover"
    />

    <div class="otherPhotos">
        ${
          !otherPhotos &&
          Array.from(new Array(5))
            .map(
              (_) =>
                `
            <img
                src="${src}"
                alt="${title}"
            />
            `
            )
            .join(" ")
        }
    </div>
    `;
}
