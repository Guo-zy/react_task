

const defaultState = {
    initArray: [...Array(0).keys()],
    size: 0,
    totalValue: 0,
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === 'change_group_size') {
        newState.size = action.value;
        newState.initArray = [...Array(action.value ? parseInt(action.value) : 0).keys()];
        return newState;
    }
    if(action.type === 'INCREMENT'){
        newState.totalValue = newState.totalValue + action.value;
        return newState;
    }
    if(action.type === 'DECREMENT'){
        newState.totalValue = newState.totalValue - action.value;
        return newState;
    }
    return state;
}