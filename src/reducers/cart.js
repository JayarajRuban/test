const cartReducer = (state = [] , action) => {
    switch (action.type) {
        case "ADD_TO_CART" :
            const findItem = state.find((item)=> {
                return item.id === action.payload.id
            })
            if (findItem) {
                return state
            } else {
                return state = [...state,{...action.payload,quantity:1}]
            }
        
        case "INCREASE_QUANTITY" : 
            return state = state.map((item) => {
                return item.id===action.payload ? {...item,quantity:item.quantity+1} : {...item}
        })

        case "DECREASE_QUANTITY" : 
            return state = state.map((item) => {
                return item.id===action.payload ? {...item,quantity:item.quantity>1?item.quantity-1:item.quantity} : {...item}
        })

        case "REMOVE_FROM_CART" : 
            return state = state.filter ((item) => item.id !== action.payload)

        case "CLEAR_CART" : 
            return state =[]
        
        default : 
            return state;
    }
}

export default cartReducer;