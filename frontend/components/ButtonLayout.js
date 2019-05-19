import React from "react";

const ButtonLayout = props => (
  <div>
    {props.children}
    <style jsx>
      {`
        display: grid;
        grid-template-columns: 1fr 1.25fr 1fr;
        grid-gap: 10px;
      `}
    </style>
  </div>
);

export default ButtonLayout;
