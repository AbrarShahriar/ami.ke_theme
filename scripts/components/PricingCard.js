export default function PricingCard({ title, price, services, recommended }) {
  return `
    <div data-aos="fade-right" class="pricing_card ${
      recommended && "pricing_card-active"
    }">
        <h2>${title}</h2>
        <span class="price">${price}</span>
        <div class="pricing_info_container">
            ${services
              .map((service) => {
                return `
                    <p>${service}</p>
                    <div class="pricing_info_divider"></div>
                `;
              })
              .join(" ")}
        </div>
        <a href="#contact" class="btn_purchase">Purchase</a>
    </div>
    `;
}
