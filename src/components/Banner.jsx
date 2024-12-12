
import styles from "../styles/banner.module.css"
import shopNowIcon from "../assets/shopnow-icon.svg"

export default function Banner(props){
    return(<section className={styles.banner}>
        <div>
            <div className={styles.product_information}>
                <img src={props.brand} alt="Brand" width={40} height={40}/>
                <span>{props.product}</span>
            </div>
            <h1>{props.title}</h1>
            <button>
                <div>
                    Shop Now
                    <hr width={80}/>
                </div>
                <img src={shopNowIcon} alt="Arrow"/>
            </button>
        </div>
        <img src={props.product_image} alt="Product"/>
    </section>)
}