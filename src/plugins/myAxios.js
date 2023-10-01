// 添加请求拦截器
import axios from "axios";
const isDev=process.env.NODE_ENV === 'development'

const my_axios = axios.create({
    baseURL: isDev?'http://localhost:8080/api':'https://yingluo-backend-73523-5-1321344148.sh.run.tcloudbase.com',
});
my_axios.defaults.withCredentials=true
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
    // 未登录择跳转到登录页
    if (response?.data?.code === 40100){
        const redirectUrl=window.location.href
        window.location.href=`/user/login?redirect=${redirectUrl}`
    }
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default my_axios;
