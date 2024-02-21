import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainCarousel from './components/MainCarousel';
import Category from './components/Category';
import MobileCarousel from './components/MobileCarousel';
import MobileCategory from './components/MobileCategory';
import Product from './components/Product';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><NavBar/><MainCarousel/><Category/></>} />
          <Route path='/mobiles' element={<><MobileCarousel/><MobileCategory/></>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
