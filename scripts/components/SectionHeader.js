export default function SectionHeader({ tag, title, desc }) {
  return `
        <div class="section_header">
            <p class="tag">${tag}</p>
            <h1>${title}</h1>
            <p class="section_info">
            ${desc}
            </p>
            <div class="divider"></div>
        </div>
    `;
}
