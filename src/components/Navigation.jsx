
import styles from  "../styles/navigation.module.css"

import searchIcon from "../assets/search-icon.svg"
import wishlistIcon from "../assets/wishlist-icon.svg"
import cartIcon from "../assets/cart-icon.svg"
import userIcon from "../assets/user-icon.svg"

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
                <div className={styles.searchbar}>
                    <input type="text" placeholder="What are you looking for? "/>
                    <img src={searchIcon} alt="Search"/>
                </div>
                <div className={styles.icons_wrapper}>
                    <img src={wishlistIcon} alt="Wishlist" />
                    <img src={cartIcon} alt="Cart" />
                    <img src={userIcon} alt="User" />
                </div>
            </div>
        </header>
    )
}