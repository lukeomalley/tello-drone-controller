import React from 'react';
import styled from 'styled-components';

const BatteryStyles = styled.div`
  width: 100%;
  --color: ${props => (props.level > 20 ? '#1af21a' : '#bb0707')};
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  background: #fff;
  .batterylevel {
    transition: all 0.5s;
    height: ${props => props.level}%;
    text-align: center;
    color: black;
    display: block;
    background: var(--color);
  }
`;

const Battery = props => {
  return (
    <BatteryStyles level={props.battery}>
      <span className="batterylevel">{props.battery}</span>
    </BatteryStyles>
  );
};

Battery.defaultProps = {
  battery: 60,
};

export default Battery;
