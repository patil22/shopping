import React, { useContext } from "react";
import "./Cart.css";
import { cartcontext } from "../Context/Context";
const Cart = () => {
  const globalstate = useContext(cartcontext);
  const state = globalstate.state;
  const dispatch = globalstate.dispatch;

  const total = state.reduce((total,product)=>
  {
      return   total+product.price*product.quantity

  },0);

  return (
    <>
      {/* <div>Cart</div> */}
      {state.map((product, index) => {
        return (
          <div className="cart" key={index}>
            <img id="img" src={product.image} alt="" />
            <p>{product.title.substring(0,30)}... </p>

            {/* <p> Price : {product.price}</p> */}

            <p> Price : {product.quantity * product.price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: product })}
              >
                +
              </button>
              <p>{product.quantity}</p>

              {/* <button
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
              >
                -
              </button> */}
              <button
                onClick={ () => {
                  if (product.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: product });
                  }
                  else{
                    dispatch({ type: "REMOVE", payload: product })
                  }
                  }}>
            
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: product })}>
              x
            </h2>

            {/* <hr></hr> */}
          </div>
        );
      })}
      {
        state.length >0 && <div className="total">
           <h2 id="totalprice"> total : {total}</h2>
           
           </div>

        
      }
    </>
  );
};

export default Cart;
