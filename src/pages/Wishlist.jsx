
import styles from "../styles/wishlistpage.module.css"

import productsData from "../assets/products.json"
import {parseFromLocalStorage} from "../utils/parseFromLocalStorage.js";
import Products from "../components/Products.jsx";
import { useEffect, useState } from "react";

export default function Wishlist(){
    const [wishlist, setWishlist] = useState(parseFromLocalStorage("wishlist"))

    useEffect(()=>{
        setWishlist(parseFromLocalStorage("wishlist") ?? [])
    },[])

    const handleMoveAllToCart = () => {
        const cart = parseFromLocalStorage("cart")
        cart.push(...wishlist)
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("wishlist", "[]")
        document.location.reload()    
    }

    return(
        <main>
            <div className={styles.title_container}>
                <h2>
                    Wishlist {`(${wishlist.length})`}
                </h2>
                <button 
                className={styles.primary_button}
                onClick={handleMoveAllToCart}
                hidden={wishlist.length === 0}
                >
                    Move all to cart
                </button>
            </div>
            {
                wishlist.length > 0
                ? <Products data={productsData.filter(item => wishlist.includes(item.name))} type="wishlist"/>
                : <h1 className={styles.empty_container}>Your wishlist is empty</h1>
            }
        </main>
    )
}
