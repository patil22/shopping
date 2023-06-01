import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Contact'
import { A } from './Container/A'
const C2 = () => {
  const aa = useContext(UserContext);
  return (
    <div>
       
    <h1>{aa} C2 component here .. </h1>
    <A/>



    </div>
  )
}

export default C2