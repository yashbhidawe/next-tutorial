import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      F1
      <div>
        <Link href={"/f1/f2"}>F2</Link>
      </div>
    </div>
  );
};

export default F1;
