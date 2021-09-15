export default function ReviewCard({
  reviewBody,
  rating,
  userImg,
  username,
  userProfession,
}) {
  return `
    <div" class="reviews_container">
        <div class="review_text_container">
            <p>
                ${reviewBody}
            </p>
            <div class="review_rating">
                ${
                  rating &&
                  Array.from(new Array(rating))
                    .map((_) => '<i class="fa fa-star"></i>')
                    .join(" ")
                }
            </div>
        </div>

        <div class="review_user_actions">
            <div class="user_info">
                <div class="avatar">
                    <img src="${userImg}" alt="" />
                </div>
                <div class="info">
                    <p>${username}</p>
                    <span class="profession">${userProfession}</span>
                </div>
            </div>
        </div>
    </div>
    `;
}
