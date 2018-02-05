import { CHANGE_SLIDE } from '../actions/publicState';

const ss = {
    collapsed: true
}

export default function reducer ( state = ss, action ) {
    console.log('reducer里面呢的state', state)
    switch (action.type) {
        case CHANGE_SLIDE:
            return {
                collapsed: !state.collapsed
            };
        default:
            return state
    }
}