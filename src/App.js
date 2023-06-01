import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import C2 from "./Component/C2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pagenot from "./Component/Pagenot";
import Cart from "./Component/Cart/Cart";
import Register from "./Component/Register";
import Login from "./Component/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          {/* <Route path="" element={<Home/>}></Route>
          <Route path="" element={<Home/>}></Route> */}

          <Route path="/Product/:id" element={<Product />}></Route>

          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/C2" element={<C2 />}></Route>

          <Route path="/Product" element={<Products />}></Route>

          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          <Route path="/*" element={<Pagenot />}></Route>
          {/* <Route path="/Login " element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Cart" element={<Cart />}></Route> */}
        </Routes>

        {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;
