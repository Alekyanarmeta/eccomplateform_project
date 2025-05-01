import axios from "axios";
import { useNavigate } from "react-router-dom";
function Addtocart(product,navigate) {
    console.log(product)
    axios.post("http://localhost:3000/carts",{
      product
    })  
    .then(() => {
        navigate("/cart");
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });          
  }
  export default Addtocart