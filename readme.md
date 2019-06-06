# DJI Tello Drone Conrtoller 🚁
Control your Ryze Tello drone with JavaScript! 

This appliction consists of a back end build on [express.js](https://expressjs.com/) and a front end build with [React](https://reactjs.org/) and [Next.js](https://nextjs.org/). Communication with the drone is made via a udp4 connection and that data is relayed to the front end using web sockets.

![drone-ui](https://i.ibb.co/SPGkHG6/drone-ui.png)
___

## Getting Started

### Prerequisites
[Node.js](https://nodejs.org/en/) JavaScript Runtime

### Clone the Repo

Start by cloning this repository to your local machine.
```
git clone https://github.com/lukeomalley/tello-drone-controller.git
```
___
### Launch the Drone

Power on your Tello drone and connect to the wifi network that the drone creates. Wait the the LED on the drone to flash yellow. This means that you are connected.

Once connected, switch over to your terminal and change into the backend directory.
```
cd backend
```
 Then run the start script.
```
npm run start
```

If your backend has succesfully connected to the drone you should see output like the following image in your terminal window

![drone-success](https://i.ibb.co/cyc6Q7h/drone-connected.png)

Now open up a new terminal tab and change into the frontend directory.
```
cd frontend
```
Now run the dev script
```
npm run dev
```
A local server is now running on port 3000. Open up your browser and navigate to the url: http://localhost:3000

From the frontend ui press the takeoff button. to launch your drone.
___

## Built With

- [React.js](https://reactjs.org/) - JavaScript Framework
- [Next.js](https://nextjs.org/) - The React Framework
- [Socket.io](https://socket.io/) - Web Socket Communications
- [Express.js](https://expressjs.com/) - Backend Server
___