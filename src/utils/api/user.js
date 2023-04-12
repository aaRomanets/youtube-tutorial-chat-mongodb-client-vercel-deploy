import {axios} from "../../core";

const userApi = {    
    //авторизация пользователя
    signIn: (postData) => {
        return axios.post ("https://full-chat-mongodb-server.herokuapp.com/user/signin",postData)
    },
    //регистрация пользователя
    signUp: (postData) => {
        return axios.post ("https://full-chat-mongodb-server.herokuapp.com/user/signup",postData)
    },
    //получаем с сервера информацию о авторизованном пользователе
    getMe: () => {
        return axios.get ("https://full-chat-mongodb-server.herokuapp.com/user/me")
    },
    //поиск собеседника
    findUsers: (query) => {
        return axios.get ("https://full-chat-mongodb-server.herokuapp.com/user/find?query=" + query)
    }
}

export default userApi;
