// 用户类别
export type UserType = {
    id: number;
    userAccount: string;
    username: string;
    avatarUrl?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: number;
    createTime: Date;
    userRole: number;
    authCode: string;
    token: string;
    tags: string;
};