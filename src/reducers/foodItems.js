import data from "../data"

const foodItemsReducer = (state = [] , action) => {
    switch (action.type) {
        case "SET_FOODITEMS" :
            if(action.payload === "All") {
                return state = data
            } else {
                return state = data.filter((item) => item.category===action.payload)
            }
        default : 
            return state;
    }
}

export default foodItemsReducer;