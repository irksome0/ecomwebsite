
import styles from  "../styles/navigation.module.css"

import wishlistIcon from "../assets/navigation/wishlist-icon.svg"
import cartIcon from "../assets/navigation/cart-icon.svg"
import userIcon from "../assets/navigation/user-icon.svg"
import Searchbar from "./Searchbar"

export default function Navigation(){
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
                    <img src={wishlistIcon} alt="Wishlist" />
                    <img src={cartIcon} alt="Cart" />
                    <img src={userIcon} alt="User" />
                </div>
            </div>
        </header>
    )
}