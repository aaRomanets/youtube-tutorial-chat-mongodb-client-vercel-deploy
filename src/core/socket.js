//связь между socket.io-client с портом 3000 и socket.io-server с портом 3003

import io from "socket.io-client";

const socket = io("https://full-chat-mongodb-server.herokuapp.com");

export default socket;
