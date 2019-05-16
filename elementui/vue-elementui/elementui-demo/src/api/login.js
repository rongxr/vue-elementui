import Axios from '@/libs/AxiosPlugin'

// 接口地址
const BASE_PATH = process.env.API_URL

// 用户登录
//export const login = params => { return Axios.post(`${BASE_PATH}/user/login`, params).then(res => res.data); };
export const login = function (params) {
    return new Promise((resolve, reject) => {
        var res = {
            'code': 200,
            'message': '',
            'data': {
                'token': 'JWT aaaaaaaaaa',
                'uid': '1',
                'username': 'admin',
                'meuns': [
                    {
                        'icon': 'el-icon-setting',
                        'index': '/home',
                        'title': '首页'
                    },
                    {
                        'icon': 'el-icon-menu',
                        'index': '2',
                        'title': '用户管理',
                        'subs': [
                            {
                                'index': '/user/list',
                                'title': '用户列表'
                            },
                            {
                                'index': '/user/info',
                                'title': '用户信息'
                            }
                        ]
                    },
                    {
                        'icon': 'el-icon-menu',
                        'index': '3',
                        'title': 'EXAMPLE',
                        'subs': [
                            {
                                'index': '/example/table',
                                'title': 'TABLE'
                            },
                            {
                                'index': '/example/form',
                                'title': 'FORM'
                            }
                        ]
                    }
                ],
                'routers': '/home_/user/list_/user/info_/example/table_/example/form'
            }
        }
        resolve(res);
    });
} 