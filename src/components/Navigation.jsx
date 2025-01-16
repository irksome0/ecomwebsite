
import styles from  "../styles/navigation.module.css"

import wishlistIcon from "../assets/navigation/wishlist-icon.svg"
import cartIcon from "../assets/navigation/cart-icon.svg"
import userIcon from "../assets/navigation/user-icon.svg"
import Searchbar from "./Searchbar"

const parseFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name)).length ?? 0
}

export default function Navigation(){
    const wishlistItems = parseFromLocalStorage("wishlist")
    const cartItems = parseFromLocalStorage("cart")

    return(
        <header className={styles.header}>
            <a className={styles.logo} href="/">Exclusive</a>
            <nav className={styles.nav}>
                <a className={styles.current_page} href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/signup">Sign Up</a>
            </nav>
            <div className={styles.additional_navigation}>
                <Searchbar/>
                <div className={styles.icons_wrapper}>
        
                    <div className={styles.icon}>
                        <div style={{position:"absolute"}}>
                            {wishlistItems === 0 ? " " : <span>{wishlistItems > 9 ? "9+" : wishlistItems}</span>}
                        </div>
                        <img src={wishlistIcon} alt="Wishlist" />
                    </div>
                    <div className={styles.icon}>
                        <div style={{position:"absolute"}}>
                            {cartItems === 0 ? " " :<span>{cartItems > 9 ? "9+" : cartItems}</span>}
                        </div>
                        <img src={cartIcon} alt="Cart" />
                    </div>
                    <img src={userIcon} alt="User" />
                </div>
            </div>
        </header>
    )
}