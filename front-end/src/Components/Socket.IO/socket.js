import { io } from "socket.io-client";

const API = process.env.REACT_APP_API_URL;
const socket = io(API, { autoConnect: false });
console.log(socket)

socket.onAny((event, ...args) => {
    console.log('here')
    // console.log(event, args);
  });

export default socket;