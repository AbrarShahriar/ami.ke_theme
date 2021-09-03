export default function SocialLink({ link, Icon }) {
  return `
    <div onClick='goToLink("${link}")' class="social_link">
        <i class="fa ${Icon}"></i>
    </div>
    `;
}
