import React from "react";

const Second = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay");
      console.log("delay");
    }, 2000);
  });
  return <div>Second</div>;
};

export default Second;
