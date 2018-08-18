export const routerReducers = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVATED_PATH':
            return ({ ...state,
                activatedPath: action.path
            })
        default:
            return ({...state, activatedPath: '/'})
    }
};