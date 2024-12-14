import Searchbar from "./Searchbar";

import styles from "../styles/sections.module.css"

// Імпорт зображень таким чином, оскільки немає необхідних посилань на відповідні зображення
import dogFoodImage from "../assets/sections/dog-food.png"
import cameraImage from "../assets/sections/camera.png"
import laptopImage from "../assets/sections/laptop.png"
import cleatsImage from "../assets/sections/cleats.png"
import gamepadImage from "../assets/sections/gamepad.png"
import jacketImage from "../assets/sections/jacket.png"

const products = [
    {name:"Breed Dry Dog Food", price:100, imageUrl: dogFoodImage},
    {name:"CANON EOS DSLR Camera", price:360, imageUrl: cameraImage},
    {name:"ASUS FHD Gaming Laptop", price: 700, imageUrl: laptopImage},
    {name:"Jr.Zoom Soccer Cleats", price:1160, imageUrl: cleatsImage},
    {name:"GP11 Shooter USB Gamepad", price:660, imageUrl: gamepadImage},
    {name:"Quilted Satin Jacket", price:660, imageUrl: jacketImage}
]

export default function Products(){
    return(
        <div className={styles.products_section}>
            <Searchbar/>
            <div className={styles.products_container}>
                {products.map((product, index) => {
                    if(index >= 8) return null;
                    return(<div className={styles.product} key={product.name}>
                        <div className={styles.product_image_container}>
                            <img src={product.imageUrl} alt="product" />
                        </div>
                        <div className={styles.product_info}>
                            <h4>{product.name}</h4>
                            <span>${product.price}</span>
                        </div>
                    </div>)
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