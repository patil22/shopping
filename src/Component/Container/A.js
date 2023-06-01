import React, { useContext } from 'react'
  import { UserContext } from '../Contact'

  
export const A = () => {
    const ab = useContext( UserContext);
  return (
    <div>
       <b> A  component </b>
<h1>{ab} other component here ...... </h1>




    </div>
  )
}
