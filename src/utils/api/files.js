import {axios} from '../../core';

const filesApi =  {
    //загружаем файл  
    upload: (file) => {
        const formData = new FormData();
        formData.append("file",file);
        return (
            axios.post("https://full-chat-mongodb-server.herokuapp.com/files",formData, {
                headers: {
                    "Content-Type": "multipert/form-data"
                }
            })
        )
    },
    //удаляем сообщение из базы данных по конкретному идентификатору id
    removeByUid: (uid) => {
        return (
            axios.delete("https://full-chat-mongodb-server.herokuapp.com/files?uid=" + uid)
        )
    },
}

export default filesApi;