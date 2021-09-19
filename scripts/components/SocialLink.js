export default function SocialLink({ link, Icon, src }) {
  return `
    <div onClick='goToLink("${link}")' class="social_link">
        ${Icon ? `<i class="fa ${Icon}"></i>` : `<img src="${src}" />`}
    </div>
    `;
}
