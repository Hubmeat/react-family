import { CHANGE_SLIDE } from '../actions/publicState';

const initState = {
    test: 'nihao',
    collapsed: false
}

export default function reducer ( state = initState, action ) {
    switch (action.type) {
        case CHANGE_SLIDE:
            return {
                collapsed: !state.collapsed
            };
        default:
            return state
    }
}