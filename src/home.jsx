import { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./foot";
import Addtocart from "./addtocart";
import Header from "./header";
import men from "./men.jpg"
import women from "./women1.png"
import jewelerys from "./jewelerys.jpg"
import electronics from "./electronics.jpg"
function Home() {
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const products = res.data;
      for (let i = products.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [products[i], products[j]] = [products[j], products[i]];
      }

      setRandomProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <>
     <Header/>
      <div className="listbg">
        <ul className="d-flex list-unstyled justify-content-center gap-4 text-center w-75 mx-auto py-3">
          <li className="list-group-item"><Link to="/men"><img src={men} alt="Men" width={40} height={40} />Men</Link></li>
          <li className="list-group-item"><Link to="/women"><img src={women} alt="Men" width={40} height={40} />women</Link></li>
          <li className="list-group-item"><Link to="/jewelery"><img src={jewelerys} alt="Men" width={40} height={40} />Jewelery</Link></li>
          <li className="list-group-item"><Link to="/electronics"><img src={electronics} alt="Men" width={40} height={40} />Electronics</Link></li>
        </ul>
      </div>

      <div className="container mt-4 d-flex flex-wrap justify-content-center gap-4">
        {randomProducts.map((product) => (
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
              <p className="card-text">${product.price}</p>
              <button className="btn btn-success" onClick={() => Addtocart(product, navigate)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
      </>
  );
}

export default Home;
