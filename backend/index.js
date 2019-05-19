const dgram = require("dgram");
const wait = require("waait");
const app = require("express");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const throttle = require("lodash/throttle");
const delays = require("./commandDelays");

const HOST = "192.168.10.1";

// UDP socket connection for sending drone commands
const drone = dgram.createSocket("udp4");
drone.bind(8889);

// UDP socket for receiving drone state
const droneState = dgram.createSocket("udp4");
droneState.bind(8890);

// Logging response from drone
drone.on("message", message => {
  console.log(`Drone: ${message}`);
  io.sockets.emit("status", message.toString());
});

// Sending browser commands to drone
io.on("connection", socket => {
  socket.on("command", command => {
    console.log("command Sent from browser");
    console.log(command);
    drone.send(command, 0, command.length, 8889, HOST, handleError);
  });
  socket.emit("status", "CONNECTED");
});

// Sending parsed drone state to browser
droneState.on(
  "message",
  throttle(state => {
    const formattedState = parseDroneState(state.toString());
    io.sockets.emit("dronestate", formattedState);
  }, 100)
);

function handleError(err) {
  if (err) {
    console.log("ERROR");
    console.log(err);
  }
}

// Parsing drone state to be human readable
function parseDroneState(state) {
  return state
    .split(";")
    .map(x => x.split(":"))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});
}

// Drone must receive "command" command before taking commands
drone.send("command", 0, "command".length, 8889, HOST, handleError);

http.listen(6767, () => {
  console.log("Socket io server up and running");
});

// Initial Drone State Parse
// droneState.on("message", message => {
//   data = message
//     .toString()
//     .split(";")
//     .map(x => x.split(":"))
//     .reduce((data, [key, value]) => {
//       data[key] = value;
//       return data;
//     }, {});
//   console.log(`Drone state: ${data}`);
// });

// Initial Drone Commands Function
// const commands = [
//   "command",
//   "battery?",
//   "takeoff",
//   "filp f",
//   "flip l",
//   "flip r",
//   "land"
// ];
// let i = 0;

// async function fly() {
//   const command = commands[i];
//   const delay = delays[command];
//   console.log(`Running command: ${command}`);
//   drone.send(command, 0, command.length, PORT, HOST, handleError);
//   await wait(delay);
//   i += 1;
//   if (i < commands.length) {
//     return fly();
//   }
//   console.log("Done");
// }
// fly();
