import { useRef} from "react"
import "./App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Addnewaddress()
{
    const address=useRef([])
    const navigate=useNavigate()
    async function setaddress() {
        try {
          const res = await axios.get("http://localhost:3500/address");
        
          if (res.data && res.data.length > 0) {
            const id=res.data[0].id
            await axios.delete(`http://localhost:3500/address/${id}`); // Changed line
          }
      
          await axios.post("http://localhost:3500/address", {
            name: address.current[0].value,
            village: address.current[1].value,
            city: address.current[2].value,
            landmark: address.current[3].value,
            mobile: address.current[4].value
          });
      
          console.log(res.data)
          navigate("/cart")
        } catch (error) {
          console.error("Error saving address:", error);
        }
      }
      
      
    return(
        <div className="address">
            <div className="d-flex g-3">
            <label>Name:</label>
            <input type="text" ref={(e)=>address.current[0]=e}/>
            </div>
            <div className="d-flex g-3 addr">
            <label>Village:</label>
            <input type="text"  ref={(e)=>address.current[1]=e}/>
            </div>
            <div className="d-flex g-3 addr">
            <label>City:</label>
            <input type="text"  ref={(e)=>address.current[2]=e}/>
            </div>
            <div className="d-flex g-3 addr">
            <label>Landmark:</label>
            <input type="text"  ref={(e)=>address.current[3]=e}/>
            </div>
            <div className="d-flex g-3 addr">
            <label>MobileNumber:</label>
            <input type="text"  ref={(e)=>address.current[4]=e}/>
            </div>
            <button className="addr" onClick={
                setaddress
            }>save address</button>
        </div>
    )
}
export default Addnewaddress;