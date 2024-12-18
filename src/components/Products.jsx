import Searchbar from "./Searchbar";

import styles from "../styles/sections.module.css"
import { useState } from "react";

// Імпорт зображень таким чином, оскільки немає необхідних посилань на відповідні зображення
import dogFoodImage from "../assets/sections/dog-food.png"
import cameraImage from "../assets/sections/camera.png"
import laptopImage from "../assets/sections/laptop.png"
import cleatsImage from "../assets/sections/cleats.png"
import gamepadImage from "../assets/sections/gamepad.png"
import jacketImage from "../assets/sections/jacket.png"

import Product from "./Product";

const products = [
    {name:"Breed Dry Dog Food", price:100, imageUrl: dogFoodImage},
    {name:"CANON EOS DSLR Camera", price:360, imageUrl: cameraImage},
    {name:"ASUS FHD Gaming Laptop", price: 700, imageUrl: laptopImage},
    {name:"Jr.Zoom Soccer Cleats", price:1160, imageUrl: cleatsImage},
    {name:"GP11 Shooter USB Gamepad", price:660, imageUrl: gamepadImage},
    {name:"Quilted Satin Jacket", price:660, imageUrl: jacketImage}
]

const parseFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?? []
}

export default function Products(){
    const [cart, setCart] = useState(parseFromLocalStorage("cart"))
    const [wishlist, setWishlist] = useState(parseFromLocalStorage("wishlist"))

    const handleItemInWishlist = (name) => {
        if(wishlist.includes(name)){
            const newValue = wishlist
            newValue.splice(newValue.indexOf(name), 1)
            setWishlist(newValue)
        }else{
            const newValue = wishlist
            newValue.push(name)
            setWishlist(newValue)
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }
    const handleItemInCart = (name) => {
        if(cart.includes(name)){
            const newValue = cart
            newValue.splice(newValue.indexOf(name), 1)
            setCart(newValue)
        }else{
            const newValue = cart
            newValue.push(name)
            setCart(newValue)
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    return(
        <div className={styles.products_section}>
            <Searchbar/>
            <div className={styles.products_container}>
                {products.map((product, index) => {
                    if(index >= 8) return null;
                    return(
                    <Product
                    key={product.name + index}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    inWishlist={wishlist.includes(product.name)}
                    inCart={cart.includes(product.name)}
                    handleWishlist={handleItemInWishlist}
                    handleCart={handleItemInCart}
                    />)
                })}
            </div>
            {
                products.length >= 4 ?
            (
                <button className={styles.view_products_button}>View All Products</button>
            ):(null)
            }
        </div>
    )
}