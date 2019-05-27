import React from 'react';
import styled from 'styled-components';

const TiltWrap = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  text-align: center;
  display: grid;
  justify-content: center;
  overflow: hidden;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  span {
    background: #fe2c70;
  }
`;

const DroneImageStyles = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 200px;
  /* transition: all 0.2s */
  color: white;
  position: relative;
  grid-column: 1 / -1;
  .droneimage {
    max-width: 100%;
    max-height: 100%;
    transform: rotateX(${props => props.pitch}deg)
      rotate(${props => props.yaw * -1}deg)
      rotateY(${props => props.roll * -1}deg);
  }
`;

const DroneTilt = ({ pitch, yaw, roll, height }) => {
  return (
    <TiltWrap>
      <span>Pitch: {pitch}</span>
      <span>Yaw: {yaw}</span>
      <span>Roll: {roll}</span>
      <span>Height: {height}</span>
      <DroneImageStyles pitch={pitch} yaw={yaw} roll={roll}>
        <img
          className="droneimage"
          src="/static/topDrone.png"
          alt="Drone Image"
        />
      </DroneImageStyles>
    </TiltWrap>
  );
};

DroneTilt.defaultProps = {
  pitch: 10,
  yaw: 0,
  roll: 0,
  height: 0,
};

export default DroneTilt;
