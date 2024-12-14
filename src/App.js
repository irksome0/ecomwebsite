import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import appleIcon from "./assets/banner/apple-icon.svg"
import iphoneImage from "./assets/banner/banner-image.svg"
import Section from './components/Section';
import Categories from './components/Categories';
import Products from './components/Products';
import Featured from './components/Featured';

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Banner title="Up to 10% off Voucher" brand={appleIcon} product="iPhone 14 Series" product_image={iphoneImage}/>
          <hr/>
        <Section name="Categories" title="Browse By Category" body={<Categories/>}/>
          <hr/>
        <Section name="Our Products" title="Explore Our Products" body={<Products/>}/>
          <hr/>
        <Section name="Featured" title="New Arrival" body={<Featured/>}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
