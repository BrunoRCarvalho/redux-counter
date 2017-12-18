// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;


//Action Types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Action Creators
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}


//Initial State
const initialState = {
    currentValue: 0
}

//Reducer

export default function counter (state = initialState, action = {}) {
    switch(action.type) {
        case INCREMENT:
        return Object.assign({}, state, {
            currentValue: state.currentValue + action.payload
        })

        case DECREMENT:
        return Object.assign({}, state, {
            currentValue: state.currentValue - action.payload
        })

        default:
        return state
    }
}
