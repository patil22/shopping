import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { cartcontext } from "./Context/Context";
const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);

  const globalstate = useContext(cartcontext);
  console.log(globalstate);
  const dispatch = globalstate.dispatch;
  useEffect(() => {
    const getproduct = async () => {
      //   setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);

      //   setProduct(await response.json());

      // // const product = await response.json();
      // setloading(false); }

      // try {
      //   setloading(true);
      //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      //   setProduct(await response.json());

      //   setloading(false);
      // } catch (error) {
      //   console.log(error);
      // }

      // }

      // fetch(`https://fakestoreapi.com/products/${id}`)
      // .then((res)=>res.json())
      // .then((data)=>{
      //   setPost(data);
      // })

      // const response = await axios
      // .get(`https://fakestoreapi.com/products/${id}`)
      // .catch((err) => {

      //   console.log("Err: ", err);

      // });
    };
    getproduct();
  }, []);

  // console.warn(id);

  const Loading = () => {
    return <>Loading ....</>;
  };
  const [value, setvalue] = useState("");
  const ass = () => {
    // setvalue({id})
  };
  const Showproduct = () => {
    return (
      <>
      {
        product.quantity=1
      }
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {product.category} </h4>
          <h1 className="display-5"> {product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="dispaly-6 fw-bold my-4">${product.price}</h3>
          <p className="lead"> ${product.description} </p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => dispatch({ type: "ADD", payload: product })}
          >
            {" "}
            Add to cart{" "}
          </button>
          <Link to="/Cart" className="btn btn-dark ms-2 px-3 py-2">
            {" "}
            Go to cart{" "}
          </Link>
          <h1>{value}</h1>
        </div>
      </>
    );
  };
  return (
    <>
      {/* <div>Produc  t</div> */}

      <div>
        <div className="container">
          {/* <div className="row">{loading ? <Loading /> : <Showproduct />}</div> */}

          <div className="row">{<Showproduct />}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
