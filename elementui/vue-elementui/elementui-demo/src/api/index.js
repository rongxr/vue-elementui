import Axios from '../libs/AxiosPlugin'

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
                                'index': '/users',
                                'title': '用户列表'
                            },
                            {
                                'index': '/user/info',
                                'title': '用户信息'
                            }
                        ]
                    }
                ],
                'routers': '/home_/users_/user/info'
            }
        }
        resolve(res);
    });
} 

// 获取用户列表
//export const getUserList = params => { return Axios.get(`${BASE_PATH}/user/list`, { params: params }).then(res => res.data); };
export const getUserList = function (params) {
    return new Promise((resolve, reject) => {
        var res = {
                'code': 200,
                'message': '',
                'data': {
                    'currentPage': 1,
                    'total': 19,
                    'pageSize': 20,
                    'list': [
                        {'id': '1', 'name': '王小虎1', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '2', 'name': '王小虎2', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '3', 'name': '王小虎3', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '4', 'name': '王小虎4', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '5', 'name': '王小虎5', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '6', 'name': '王小虎6', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '7', 'name': '王小虎7', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '8', 'name': '王小虎8', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '9', 'name': '王小虎9', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'},
                        {'id': '10', 'name': '王小虎10', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}
                    ]
                }
            }
        resolve(res);
    });
}

// 首页加载数据
//export const loadData  = params => { return Axios.get(`${BASE_PATH}/home/loadData`).then(res => res.data) };
export const loadData = function (params) {
    return new Promise((resolve, reject) => {
        var res = {'code':200, 'data':'hello'}
        resolve(res);
    });
}

// 文件上传地址
export const uploadFile = `${BASE_PATH}/file/upload`;
