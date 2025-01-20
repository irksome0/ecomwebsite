import { useState } from "react";
import wishlistIcon from "../assets/navigation/wishlist-icon.svg";
import wishlistActiveIcon from "../assets/navigation/wishlist-active-icon.svg"
import deleteIcon from "../assets/sections/delete-icon.svg"
import styles from "../styles/sections.module.css";

export default function Product(props){    
    const [isHovered, setIsHovered] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(props.inWishlist)
    const [isInCart, setIsInCart] = useState(props.inCart)

    const updateHover = () => {
        setIsHovered(prev => !prev)
    }
    
    const handleWishlist = () => {
        if(isInCart && !isWishlisted){
            handleCart(props.name)
        }
        setIsWishlisted(prev => !prev)
        props.handleWishlist(props.name)
    }

    const handleCart = () => {
        if(isWishlisted && !isInCart){
            handleWishlist(props.name)
        }
        setIsInCart(prev => !prev)
        props.handleCart(props.name)
    }

    if(props.type === "cart"){
        return(
            <h1>Cart</h1>
        )
    }
    return(
        <div className={styles.product} onMouseEnter={updateHover} onMouseLeave={updateHover}>
            <div className={styles.product_image_container} style={{backgroundImage:`url(${props.imageUrl})`}}>
                <div className={styles.wishlistButton}>
                    <img
                    src={
                        props.type === "wishlist" ?
                        deleteIcon :
                        isWishlisted ? wishlistActiveIcon : wishlistIcon
                    }
                    alt="wishlist"
                    onClick={handleWishlist}
                    />
                </div>
                <button
                    className={styles.cartButton}
                    hidden={!isHovered}
                    onClick={() => handleCart()}>
                    {isInCart ? 'Remove From Cart' : 'Add To Cart'}
                </button>
            </div>
            <div className={styles.product_info}>
                <h4>{props.name}</h4>
                <span>${props.price}</span>
            </div>
        </div>
    )
}