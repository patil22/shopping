import React, { useContext } from "react";
import { UserContext } from "./Contact";
import C2 from './C2'
import { Link } from "react-router-dom";
export const C3 = () => {
    // const UserContext = createContext();


const {add} = useContext(UserContext);

console.warn('user is .......',add)

  return (
    <div>
      C3
      <h1>Component 3</h1>
      <h2>{`Hello ${add} Again!`}</h2>

{/* <Link to = "/C2">  Go to C2 component </Link> */}
      <C2/>
    </div>
  );
};
