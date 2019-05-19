const dgram = require("dgram");
const wait = require("waait");
const delays = require("./commandDelays");
const app = require("express");
const http = require("http").Server(app);
const PORT = 8889;
const HOST = "192.168.10.1";

const drone = dgram.createSocket("udp4");
drone.bind(PORT);

const droneState = dgram.createSocket("udp4");
droneState.bind(8890);

drone.on("message", message => {
  console.log(`Drone: ${message}`);
});

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

function handleError(err) {
  if (err) {
    console.log("ERROR");
    console.log(err);
  }
}

function parseDroneState(state) {
  state.split(";").map(x =>
    x.split(":").reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {})
  );
}

// drone.send('command', 0, 7, PORT, HOST, handleError);
// drone.send('battery?', 0, 8, PORT, HOST, handleError);

const commands = ["command", "battery?", "takeoff", "filp f", "flip l", "flip r", "land"];
let i = 0;

async function fly() {
  const command = commands[i];
  const delay = delays[command];
  console.log(`Running command: ${command}`);
  drone.send(command, 0, command.length, PORT, HOST, handleError);
  await wait(delay);
  i += 1;
  if (i < commands.length) {
    return fly();
  }
  console.log("Done");
}

fly();

http.listen(3000, () => {
  console.log("socket io server listening on port 3000");
});
