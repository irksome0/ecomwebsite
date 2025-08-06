
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
