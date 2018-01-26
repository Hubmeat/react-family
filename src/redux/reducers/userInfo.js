import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from '../actions/userInfo';

const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
}

export default function reducer (state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                hah: 'i am request sign',
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hah: 'i am success sign',
                userInfo: action.userInfo,
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hah: 'i am error sign',
                userInfo: {},
                errorMsg: '请求出错'
            };
        default:
            return state
    }
}