import myAxios from "../plugins/myAxios.js";
export const getCurrentUser = async ()=> {
    // const currentUser=getCurrentUserState()
    // if (currentUser){
    //     return currentUser
    // }
    // 不存在再从远程获取
    const res = await myAxios.get('/user/current');
    if (res.data.code === 1 && res.data.data) {
        // setCurrentUserState(res.data.data)
        return res.data.data;
    }else {
        return null;
    }
}
