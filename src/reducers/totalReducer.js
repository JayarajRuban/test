const totalReducer = (state = 0 , action) => {
    switch (action.type) {
        case "SET_TOTAL" :
            return state = action.payload
        default : 
            return state;
    }
}

export default totalReducer;