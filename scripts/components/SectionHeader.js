export default function SectionHeader({ tag, title, desc, aos = "fade-up" }) {
  return `
        <div data-aos="${aos}" class="section_header">
            <p class="tag">${tag}</p>
            <h1>${title}</h1>
            <p class="section_info">
            ${desc}
            </p>
            <div class="divider"></div>
        </div>
    `;
}
