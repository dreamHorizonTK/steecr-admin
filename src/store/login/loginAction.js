import loginActionType from './loginActionType';
import axios from 'axios';

export default {
    // 用户登录接口
    logIn: (username, password) => {
        return dispatch => {
            axios.get('/login', {
                username,
                password
            }).then((res) => {
                if (res.data.result) {
                    // 登录成功
                    dispatch({
                        type: loginActionType.LOGIN,
                        data: {
                            username,
                            isLogged: true
                        }
                    });
                } else {
                    
                }
            });
        };
    },
    // 用户登出
    logOut: () => {
        return dispatch => {
            dispatch({
                type: loginActionType.LOGOUT,
                data: {
                    username: 123
                }
            });
        };
    },

    changeStatus: (statusName, status) => {
        return dispatch => {
            dispatch({
                type: loginActionType.CHANGESTATUS,
                data: {
                    [statusName]: !!status
                }
            });
        };
    }
}