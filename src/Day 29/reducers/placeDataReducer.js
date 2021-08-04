const placeDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PLACE_DATA":
      return action.payload;

    default:
      return state;
  }
};

export default placeDataReducer;
