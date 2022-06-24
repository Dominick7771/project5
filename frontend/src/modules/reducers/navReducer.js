const INITIAL_STATE = {
    navPosition: null
};

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_NAV': {
            return {...state, navPosition: action.payload}
        }
        default:
            return state
    }
}

export default navReducer