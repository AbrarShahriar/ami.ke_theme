export let initState = {
  portfolioState: ".all_works",
};

export const reducer = (state = initState, action) => {
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
