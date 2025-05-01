import axios from "axios"
import { useEffect, useState } from "react"
import Addtocart from "./addtocart"
import { useNavigate } from "react-router-dom"
function Electronic()
{
    const [menproduct,setProducts]=useState([])
    const navigate=useNavigate()
    useEffect(
        ()=>{
            getapilist()
        },[]
    )
    async function getapilist()
    {
        const res=await axios.get("https://fakestoreapi.com/products/category/electronics")
        const products = res.data;
        console.log(res.data)
        setProducts(products)
        console.log(menproduct)
    }
    return(
        <div className="container mt-4 d-flex flex-wrap justify-content-center gap-4">
        {menproduct.map((product) => (
          <div key={product.id} className="card w-10 h-50" style={{ width: "18rem" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1rem" }}>
                {product.title}
              </h5>
              <button className="btn btn-success" onClick={() => Addtocart(product,navigate)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>      
    )
}
export default Electronic