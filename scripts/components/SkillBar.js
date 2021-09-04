export default function SkillBar({ title, value }) {
  return `
        <div class="skill" data-aos="fade-up" >
            <p>${title}</p>
            <div class="skill_bar" style='width: ${value}%'>
            <div class="skill_count">
                <span>${value}%</span>
                <div class="triangle"></div>
            </div>
            </div>
        </div>
    `;
}
