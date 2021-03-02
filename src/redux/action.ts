import http from "../api";

export const setItems = (items: any) => ({
  type: "SET-ITEMS",
  payload: items
});

export const fetchItems = (value: string) => {
  return (dispatch: any) => {
    if (value) {
      http({
        url:`https://www.googleapis.com/customsearch/v1?key=AIzaSyCjk7qecfFjRWUXHb6_7AMpma0_g4Kmx_I&cx=017576662512468239146:omuauf_lfve&q=${value}`

      })
        .then(resp => dispatch(setItems(resp.data)))
        .catch(() => dispatch(setItems([])));
    }
  };
};
