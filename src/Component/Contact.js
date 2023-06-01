import React from "react";
import { createContext } from "react";
import C1 from "./C1";



import { useState } from "react";
 export const UserContext = createContext();

const Contact = () => {
  const [user, setUser] = useState("Jesse Hall");
 
  return (
    <>
      <div>Contact</div>
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
        <C1 user={user}></C1>
 
      </UserContext.Provider>
    </>
  );
};

export default Contact;
