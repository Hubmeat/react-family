import { combineReducers } from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
// 导入公共参数reducer
import publicState from './reducers/publicState';

// export default function combineReducers ( state = {}, action ) {
//     return {
//         counter: counter( state.counter, action ),
//         userInfo: userInfo( state.userInfo, action)
//     }
// }

export default combineReducers({
    counter,
    userInfo,
    publicState
})