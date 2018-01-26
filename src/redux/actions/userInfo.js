import axios from '../../axios/axios';

export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";


function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}


function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}

export function getUserInfo () {
    return function (dispatch) {
        dispatch(getUserInfoRequest())
        return axios.get('http://localhost:4100/data.json')
                         .then( res => {
                            console.log('res', res)
                            setTimeout(() => {
                                dispatch(getUserInfoSuccess(res.data))
                            }, 2000);
                         })
                         .catch(err => {
                            console.log('err', err)
                            dispatch(getUserInfoFail())
                         })
    }
}