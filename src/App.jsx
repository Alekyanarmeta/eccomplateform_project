import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./sinup";
import Login from "./loginpage";
import Home from "./home";
import Cart from "./cartpage";
import Men from "./men";
import Women from "./women";
import Electronic from "./electronic";
import Jewelery from "./jewelery";
import Addnewaddress from "./addform";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/jewelery" element={<Jewelery/>}/>
        <Route path="/electronics" element={<Electronic/>}/>
        <Route path="/addform" element={<Addnewaddress/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
