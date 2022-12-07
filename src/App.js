import './App.css';
import './tailwind.output.css';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cartpage/cart';
import Register from './components/auth/register'
import Login from "./components/auth/login"; 
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/register" element = {<Register/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
