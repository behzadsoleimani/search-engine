const reducer = (state : any, action : any) => {

  switch (action.type) {
    case "SET-ITEMS":
        return { ...state, listItems: action.payload.items };

   

    default:
      return state;
  }
};

export default reducer;
