// 用户类别
import {UserType} from "./user";

export type TeamType = {
    id: number
    name: string,
    description: string,
    expireTime?: Date,
    userId: number,
    maxNum: number,
    password?: string,
    status: number,
    createUser: UserType,
    hasJoin:boolean
    hasJoinNum:number,
    createTime: Date,
    updateTime: Date,
};