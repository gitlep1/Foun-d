const app = require("./app.js");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require("dotenv").config();

const PORT = process.env.PORT;

io.on('connection', () => { console.log('Hello')});

server.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
