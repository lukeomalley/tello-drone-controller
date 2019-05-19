import React from "react";
import ButtonLayout from "../components/ButtonLayout";
import socket from "../socket";

const Buttons = () => {
  const amount = 100;
  return (
    <div>
      <ButtonLayout>
        <button className="takeoff button" onClick={sendCommand(`takeoff`)}>
          Takeoff
        </button>

        <button
          className="forward button"
          onClick={sendCommand(`forward ${amount}`)}
        >
          <span className="symbol">↑</span>Forward
        </button>

        <button className="land button" onClick={sendCommand(`land`)}>
          Land
        </button>

        <button className="left button" onClick={sendCommand(`left ${amount}`)}>
          <span className="symbol">←</span>Left
        </button>

        <button className="emergency button" onClick={sendCommand(`emergency`)}>
          -- Emergency --
        </button>

        <button
          className="right button"
          onClick={sendCommand(`right ${amount}`)}
        >
          <span className="symbol">→</span>Right
        </button>

        <button className="up button" onClick={sendCommand(`up ${amount}`)}>
          <span className="symbol">⤒</span>Up
        </button>

        <button className="back button" onClick={sendCommand(`back ${amount}`)}>
          <span className="symbol">↓</span>Back
        </button>

        <button className="down button" onClick={sendCommand(`down ${amount}`)}>
          <span className="symbol">⤓</span>Down
        </button>
      </ButtonLayout>
      <style jsx>
        {`
          button {
            border: 0;
            background: #fff;
            border: 2px solid transparent;
            color: black;
            font-size: 2rem;
            position: relative;
            font-family: "Roboto";
          }
          .button:active {
            transform: translateY(2px);
          }
          .button:focus {
            outline: none;
          }
          .takeoff {
            color: white;
            background: #d65365;
          }
          .land {
            color: white;
            background: #4fd68e;
          }
          .forward {
            background: #67eaef;
          }
          .back {
            background: #67eaef;
          }
          .left {
            background: #67eaef;
          }
          .right {
            background: #67eaef;
          }
          .emergency {
            background: orange;
          }
          span.symbol {
            display: block;
            font-size: 2rem;
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
};

function sendCommand(command) {
  return function() {
    console.log(`Sending the command: ${command}`);
    socket.emit("command", command);
  };
}

export default Buttons;
