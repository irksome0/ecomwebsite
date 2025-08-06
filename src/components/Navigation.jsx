
import styles from  "../styles/navigation.module.css"

import wishlistIcon from "../assets/navigation/wishlist-icon.svg"
import cartIcon from "../assets/navigation/cart-icon.svg"
import userIcon from "../assets/navigation/user-icon.svg"
import Searchbar from "./Searchbar"
import {Link} from "react-router-dom"
import { parseFromLocalStorage } from "../utils/parseFromLocalStorage"

export default function Navigation(){
    const wishlistItems = parseFromLocalStorage("wishlist").length
    const cartItems = parseFromLocalStorage("cart").length

    return(
        <header className={styles.header}>
            <a className={styles.logo} href="/">Exclusive</a>
            <nav className={styles.nav}>
                <Link to="/"><p className={styles.current_page} href="/">Home</p></Link>
                <p href="/contact">Contact</p>
                <p href="/about">About</p>
                <p href="/signup">Sign Up</p>
            </nav>
            <div className={styles.additional_navigation}>
                <Searchbar/>
                <div className={styles.icons_wrapper}>
        
                    <div className={styles.icon}>
                        <div className={styles.icon_counter}>
                            {wishlistItems === 0 ? " " : <span>{wishlistItems > 9 ? "9+" : wishlistItems}</span>}
                        </div>
                        <Link to="/wishlist"><img src={wishlistIcon} alt="Wishlist" /></Link>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.icon_counter}>
                            {cartItems === 0 ? " " :<span>{cartItems > 9 ? "9+" : cartItems}</span>}
                        </div>
                        <Link to="/cart"><img src={cartIcon} alt="Cart" /></Link>
                    </div>
                    <img src={userIcon} alt="User" />
                </div>
            </div>
        </header>
    )
}