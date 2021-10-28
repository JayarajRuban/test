export const setCategories = (categoriesList) => {
    return {
        type : "SET_CATEGORIES",
        payload : categoriesList
    }
}

export const setFoodItems = (category) => {
    return {
        type : "SET_FOODITEMS",
        payload : category
    }
}

export const addToCart = (id,name,price) => {
    return {
        type : "ADD_TO_CART",
        payload : {id,name,price}
    }
}

export const increaseQuantity = (id) => {
    return {
        type : "INCREASE_QUANTITY",
        payload : id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type : "DECREASE_QUANTITY",
        payload : id
    }
}

export const removeFromCart = (id) => {
    return {
        type : "REMOVE_FROM_CART",
        payload : id
    }
}

export const clearCart = () => {
    return {
        type : "CLEAR_CART",
    }
}

export const setTotal = (total) => {
    return {
        type : "SET_TOTAL",
        payload : total
    }
}
