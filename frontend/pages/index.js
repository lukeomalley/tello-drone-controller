import React from "react";
import Header from "../components/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <button>Takeoff</button>
      <button>Land</button>
      <button>Forward</button>
      <button>Back</button>
      <button>Up</button>
      <button>Down</button>
      <style jsx global>
        {`
          body {
            font-family: "Operator Mono", monospace;
            font-weight: 900;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
