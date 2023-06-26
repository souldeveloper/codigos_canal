

export const reducer = (state, action) => {
    switch (action.type){
        case 'sumar':
            return {
                ...state,
                contador :state.contador + 1
            }
        case 'restar':
            return {
                ...state,
                contador: state.contador - 1
            }
        default:
            return state
    }
}