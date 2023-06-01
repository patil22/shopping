import React from "react";
// import C2 from "./C2";
import { C3 } from "./C3";

import { UserContext } from "./Contact";
import { useContext } from "react";

const C1 = () => {
  const add = useContext(UserContext);
  console.warn("user is .......", add);

  return (
    <div>
      C1
      <h2>{`Hello ${add} In c1 component again!`}</h2>
      {/* <C2></C2>    */}
      <C3/>
    </div>
  );
};

export default C1;
