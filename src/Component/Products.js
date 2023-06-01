import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

import './product.css'
import { Link } from "react-router-dom";
const Product = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentmounted = true;
  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentmounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }
      return () => {
        componentmounted = false;
      };
    };
    getproduct();
  }, []);
  const Loading = () => {
    return( 
    <>
    Loading ....
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div> 
    </>
    );
  };
  const filterProduct = (cat)=>{
    const updatedlist = data.filter((x)=>x.category === cat);
    setfilter(updatedlist);
       

  }
  const Showproduct = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")} >Men's Clothing </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")} >
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}> Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic </button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key = {Product.id}>
                  <img src={Product.image} class="card-img-top" alt={Product.title} height="250px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0 ">{Product.title.substring(0,12)}... </h5>
                    <p class="card-text lead fw-bold  ">
                      ${Product.price}
                   
                    </p>
                    <Link  to= {`/Product/${Product.id}`} class="btn btn-outline-dark ">
                      Buy Now 
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr></hr>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <Showproduct />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
