import React from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

const Index = () => {
  return (
    <div>
      <Header />
      <Buttons />
      <style jsx global>
        {`
          body {
            border: 40px solid transparent;
            font-family: "Roboto", monospace;
            font-weight: 900;
            font-size: 1rem;
            background: #142451;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
