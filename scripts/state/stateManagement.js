export let initState = {
  portfolioState: ".all_works",
  reviews: [
    {
      reviewBody: `"In promotion and of advertising testimonial show consiss of a person's written orsoken statement extollig the virtue"`,
      rating: 5,
      userImg:
        "https://themebing.com/wp/amike/wp-content/uploads/2019/12/2.jpg",
      username: "Maria Doe",
      userProfession: "Founder of Woo",
    },
    {
      reviewBody: `"In promotion and of advertising testimonial show consiss of a person's written orsoken statement extollig the virtue"`,
      rating: 4,
      userImg:
        "https://themebing.com/wp/amike/wp-content/uploads/2019/12/1.jpg",
      username: "Emmaley Mcculloch",
      userProfession: "Co-Founder of Axis",
    },
  ],
};

export const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case "UPDATE_PORTFOLIO_STATE":
      return {
        ...state,
        portfolioState: action.portfolioState,
      };

    default:
      return state;
  }
};

export const dispatch = (action) => {
  initState = reducer(initState, action);
};
