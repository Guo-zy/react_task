const defaultState = {
    totalValue: 0,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { totalValue: state.totalValue + action.value }
        case 'DECREMENT':
            return { totalValue: state.totalValue - action.value }
        default:
            return state
    }



}