import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import banner from './Components/Assets/banner2.png'
import banner4 from './Components/Assets/banner4.png'
function App() {
  return (
    <div>
          <BrowserRouter>
          <Navbar/>


<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/mens" element={<ShopCategory banner={men_banner} category= "men"/>}/>
<Route path="/womens" element={<ShopCategory banner={banner} category= "women"/>}/>
<Route path="/kids" element={<ShopCategory  banner={banner4} category= "kid"/>}/>
<Route path="product" element={<Product/>}>
<Route path = ':productId' element = {<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
</BrowserRouter>
      
   
      
    </div>
  );
}

export default App;
