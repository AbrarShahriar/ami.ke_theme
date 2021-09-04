export default function BlogCard({ imgSrc, poster, date, comments, title }) {
  return `
        <div data-aos="fade-up" class="blog_card">
            <img
                src="${imgSrc}"
                alt=""
            />
            <div class="blog_info">
                <div class="poster_info">
                    <i class="fa fa-user"></i>
                    <span class="blog_by">By <a href="/">${poster}</a></span>
                    <i class="fa fa-calendar-o"></i>
                    <span class="date">${date}</span>
                    <i class="fa fa-comments"></i>
                    <span class="comments">${comments}</span>
                </div>
                <span class="title">
                    ${title}
                </span>
                <div class="btn_readmore">
                    Read More
                    <i class="fa fa-fw fa-arrow-circle-right"></i>
                </div>
            </div>
        </div>
    `;
}
