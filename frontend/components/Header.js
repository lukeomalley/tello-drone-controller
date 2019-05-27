import React from "react";
import NextHead from "next/head";

const Header = () => {
  return (
    <div>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>DJI Tello Controller</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <h1>Drone Controller</h1>
      <style jsx>
        {`
          h1 {
            text-align: center;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
