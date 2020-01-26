import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = ingredientName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName
  };
};
export const removeIngredient = ingredientName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName
  };
};

/* export const initIngredients = () => {
  return dispatch => {};
}; */

export const initIngredients = () => dispatch => {
  axios
    .get("https://react-my-burger-b5427.firebaseio.com/ingredients.json")
    .then(res => {
/*       console.log("axiosingredients", res.data); */
      dispatch({
        type: actionTypes.SET_INGREDIENTS,
        ingredients: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: actionTypes.FETCH_INGREDIENTS_FAILED
      })
    );
};
