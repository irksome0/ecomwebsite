
import styles from "../styles/cart.module.css"

import productsData from "../assets/products.json"
import { useState } from "react"
import { parseFromLocalStorage } from "../utils/parseFromLocalStorage"
import CartTableBody from "../components/CartTableBody"
import {useNavigate} from "react-router-dom"

export default function Cart(){
    const cart = parseFromLocalStorage("cart")
    const filteredProducts = productsData.filter(item => cart.includes(item.name))
    const [cartTotal, setCartTotal] = useState(cart.length > 0
        ? filteredProducts.reduce((acc,obj) => (acc + obj.price),0) : 0)

    const navigate = useNavigate()

    const updateTotal = (data) => {
        const temp = data.reduce((acc,obj) => (acc + obj.subtotal),0)
        setCartTotal(temp)
    }

    return(
        <main>
            <div className={styles.title_container}>
                <h2>Cart {`(${cart.length})`}</h2>
            </div>
            {cart.length > 0
            ?(<>
                <table>
                    <thead className={styles.cart_header}>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <CartTableBody data={filteredProducts} updateSubtotal={updateTotal}/>
                </table>
                <div>
                    <button
                    className={styles.primary_button}
                    onClick={() => navigate("/")}
                    >
                        Return to shop
                    </button>
                </div>
                <div className={styles.cart_total}>
                    <div className={styles.coupon_container}>
                        <input className={styles.coupon_field} type="text" alt="coupon" placeholder="Coupon code"/>
                        <button className={styles.secondary_button}>Apply coupon</button>
                    </div>
                    <div className={styles.cart_total_container}>
                        <h3>cart total</h3>
                        <div className={styles.cart_total_subcontainer}>
                            <span>Subtotal:</span>
                            <span>${cartTotal}</span>
                        </div>
                        <hr />
                        <div className={styles.cart_total_subcontainer}>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <hr />
                        <div className={styles.cart_total_subcontainer}>
                            <span>Total:</span>
                            <span>${cartTotal}</span>
                        </div>        
                        <button className={styles.secondary_button} style={{width:"50%", alignSelf:"center"}}>Checkout</button>      
                    </div>
                </div>
            </>
            )
            :(<h1 className={styles.empty_container}>Your cart is empty</h1>)
            }
        </main>
    )
}