import cartReducer from "./cart";
import foodItemsReducer from "./foodItems";
import categoriesReducer from "./categories";
import { combineReducers } from "redux";
import totalReducer from "./totalReducer";

const rootReducer = combineReducers({
    cart : cartReducer,
    foodItems : foodItemsReducer,
    categories : categoriesReducer,
    total : totalReducer
})

export default rootReducer;