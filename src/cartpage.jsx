import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./foot";
import Addnewaddress from "./addform";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const [address,setadress]=useState([]);
  const [productlist, setProduct] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    getApi();
  }, []);
  useEffect(
    ()=>{
      getaddress()
    },[]
  )
  async function getaddress()
  {
    const add=await axios.get("http://localhost:3500/address")
    setadress(add.data)
    console.log(address)
  }
  async function getApi() {
    try {
      const res = await axios.get("http://localhost:3000/carts");
      setProduct(res.data);
      console.log(res.data); // Log response, not outdated state
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }
  const totalPrice = productlist.reduce(
    (acc, p) => acc + p.product.price,0
    
  );
  function Removeitem(id)
  {
    axios.delete(`http://localhost:3000/carts/${id}`)
    const arr=productlist.filter(
      (p)=>p.id!=id 
    )
    setProduct(arr)
  }
  return (
    <>
    <div className="d-flex flex-wrap gap-3 p-3">
      {
        productlist.map(
          (p)=>(
            <div key={p.id} className="card w-10 h-10" style={{ width:"250px",height:"210px"}}>
            <img
              src={p.product.image}
              style={{ height: "50px", objectFit: "contain",alignContent:"left"}}
            />
              <p className="card-title">
                {p.product.title}
              </p>
              <p className="card-text">${p.product.price}</p>
              <div>
              <button className="btn btn-success">Buy</button>
              <button className="btn btn-primary" onClick={()=>
                {
                     Removeitem(p.id)
                }
              }>Remove</button>
              </div>
              
            </div>
          )
        )
      }
      <div className="card w-100">
      <h2>Address</h2>
      <div>
      {
        address.map((a, index) => (
          <div key={index}>
            <h4>{a.name}</h4>
            <h4>{a.village}</h4>
            <h4>{a.city}</h4>
            <h4>{a.landmark}</h4>
            <h4>{a.mobile}</h4>
          </div>
        ))
        
      }
      </div>
      <div className="text-end">
      <button className="btn btn-success w-50 h-70" onClick={()=>
         navigate("/addform")
      }>ADD address</button>
      </div>
    </div>
      <div className="card w-100 h-10 ">
      <h1>Pricedetails</h1>
      <p>ToatalPrice:   ${totalPrice}</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Cart;
