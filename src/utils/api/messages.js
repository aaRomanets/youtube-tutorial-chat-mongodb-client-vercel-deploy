import {axios} from '../../core';

const messagesApi =  {
    //получаем все сообщения из конкретного диалога
    getAllByDialogId: (id) => {        
        return (
            axios.get("https://full-chat-mongodb-server.herokuapp.com/messages?dialog=" + id)
        )
    },

    //удаляем сообщение из базы данных по конкретному идентификатору id
    removeById: (id) => {
        return (
            axios.delete("https://full-chat-mongodb-server.herokuapp.com/messages?id=" + id)
        )
    },

    //отправляем сообщение в базу данных сообщений на сервере
    //text - текст отправляемого сообщения
    //dialogId - идентификатор диалога в котором пользователь отправляет собеседнику сообщения
    //attachments - список идентификаторов файлов-картинок который входит в отправляемое сообщение
    send: (text,dialogId,attachments) => {
        return (
            axios.post("https://full-chat-mongodb-server.herokuapp.com/messages", {
                text: text,
                dialog_id: dialogId,
                attachments
            })
        )
    }
}

export default messagesApi;