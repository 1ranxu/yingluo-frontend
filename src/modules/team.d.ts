// 用户类别
import {UserType} from "./user";

export type TeamType = {
    id:number
    name: string,
    description: string,
    expireTime? : Date,
    maxNum: number,
    password?: string,
    status: number,
    userList: UserType[],
    createTime: Date,
    updateTime: Date,
};