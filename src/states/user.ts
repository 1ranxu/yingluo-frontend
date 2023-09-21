import {UserType} from "../modules/user";
let currentUserState:UserType;

const setCurrentUserState = (user:UserType) => {
    currentUserState=user
}

const getCurrentUserState = () => {
    return currentUserState
}

export {
    setCurrentUserState,
    getCurrentUserState,
}