export default function ServiceCard({ title, desc, Icon }) {
  return `
    <div class="services_card" data-aos="fade-right">
        <i class="icon fa ${Icon}"></i>
        <h2>${title}</h2>
        <p>
        ${desc}
        </p>
    </div>
    `;
}
