import {axios} from '../../core';

const dialogsApi =  {
    //получаем все диалоги
    getAll: () => {
        return (
            axios.get("https://full-chat-mongodb-server.herokuapp.com/dialogs")
        )
    },
    //создаем диалог
    create: ({partner,text}) => {
        return (
            axios.post("https://full-chat-mongodb-server.herokuapp.com/dialogs",{partner,text})
        )
    },
}

export default dialogsApi;
