import loginActionType from './loginActionType';

let userInfo = {
    username: '',                   // 用户名称
    isLogged: false,                // 是否登录
    usernameIllegal: false,         // 用户名错误
    passwordIllegal: false,         // 密码错误
    islogining: false,              // 正在登录
};

export default function (state = userInfo, action) {
    switch(action.type) {
        case loginActionType.LOGIN:
            return Object.assign({}, state, {
                ...state.data,
                islogining: true
            });
        case loginActionType.LOGOUT:
            return Object.assign({}, state, action.data);

        case loginActionType.CHANGESTATUS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}