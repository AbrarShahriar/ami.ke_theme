export default function TotalWork({ title, Icon, amount }) {
  return `
        <div class="work">
            <i class="fa ${Icon}"></i>
            <h1>${amount}</h1>
            <p>${title}</p>
        </div>
    `;
}
