import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import appleIcon from "./assets/apple-icon.svg"
import iphoneImage from "./assets/banner-image.svg"

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Banner title="Up to 10% off Voucher" brand={appleIcon} product="iPhone 14 Series" product_image={iphoneImage}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
