export default function SectionHeaderV2({
  tag,
  title,
  desc,
  btnName,
  aos = "fade-up",
}) {
  return `
    <div class="section_header_v2" data-aos="${aos}" data-aos-delay="500">
        <p class="tag">${tag}</p>
        <h1>${title}</h1>
        <p class="section_info_v2">
        ${desc}
        </p>
        <div class="btn_hireme">${btnName}</div>
    </div>
    `;
}
