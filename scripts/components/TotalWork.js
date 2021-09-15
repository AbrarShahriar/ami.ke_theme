export default function TotalWork({ title, Icon, amount, index }) {
  return `
        <div class="work">
            <i class="fa ${Icon}"></i>
            <h1 id="countUp">${amount}</h1>
            <p>${title}</p>
        </div>
    `;
}
