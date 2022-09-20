const initialState = {
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { page: state.page + 1 };
    case "DECREMENT":
      return { page: state.page - 1 };
    case "MAXINCREMENT":
      return { page: (state.page = 20) };
    case "MINDECREMENT":
      return { page: (state.page = 1) };
    default:
      return state;
  }
};

export { initialState, reducer };
