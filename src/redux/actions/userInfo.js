export const GET_USER_INFO_REQUESTs = "userInfo/GET_USER_INFO_REQUEST";
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
        dispatch(getUserInfoRequest)
        return this.axios.get('../../assets/data.json')
                         .then( res => {
                             return res.json()
                         })
                         .catch(err => {
                             console.log('err', err)
                         })
    }
}