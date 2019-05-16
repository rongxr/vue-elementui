import Axios from '@/libs/AxiosPlugin'

// 接口地址
const BASE_PATH = process.env.API_URL

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
