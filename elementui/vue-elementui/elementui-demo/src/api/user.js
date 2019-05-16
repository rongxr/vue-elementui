import Axios from '@/libs/AxiosPlugin'

// 接口地址
const BASE_PATH = process.env.API_URL

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