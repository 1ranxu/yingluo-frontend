// 添加请求拦截器
import axios from "axios";
const my_axios = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 100000,
    headers: {
        'Authorization': sessionStorage.getItem("token"),
    }
});

my_axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("我要发请求了",config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
my_axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("我收到响应了",response)
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default my_axios;
