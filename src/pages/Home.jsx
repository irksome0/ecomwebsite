
import Banner from '../components/Banner';

import appleIcon from "../assets/banner/apple-icon.svg"
import iphoneImage from "../assets/banner/banner-image.svg"
import Section from '../components/Section';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Featured from '../components/Featured';

import productsData from "../assets/products.json"

export default function Home(){
    return(
        <main>
            <Banner title="Up to 10% off Voucher" brand={appleIcon} product="iPhone 14 Series" product_image={iphoneImage}/>
            <hr/>
            <Section name="Categories" title="Browse By Category" body={<Categories/>}/>
            <hr/>
            <Section name="Our Products" title="Explore Our Products" body={<Products data={productsData}/>}/>
            <hr/>
            <Section name="Featured" title="New Arrival" body={<Featured/>}/>
        </main>
    )
}