import { createPortal} from "react-dom";
import { Link } from "react-router-dom";
function Footer() {
    return createPortal(
      <div className="bg-dark" style={{width:"auto",height:"50px"}}>
      <ul className="list-group list-group-horizontal d-flex gap-4 justify-content-center list-unstyled pt-2 ">
        <li><Link to="/home">🏠Home</Link></li>
        <li><Link to="/cart">🛒Cart</Link></li>
      </ul>
      </div>,
      document.getElementById("foot")
    );
  }
  export default Footer