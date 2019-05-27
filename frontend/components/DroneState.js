import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../socket';
import Battery from './Battery';
import DroneTilt from './DroneTilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
}

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .status {
    color: white;
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState();
  return (
    <DroneStateStyles>
      <h1 className="status">Status: {status}</h1>
      <Battery battery={droneState.bat} />
      <DroneTilt
        pitch={droneState.pitch}
        yaw={droneState.yaw}
        roll={droneState.roll}
        height={droneState.h}
      />
    </DroneStateStyles>
  );
};

export default DroneState;
