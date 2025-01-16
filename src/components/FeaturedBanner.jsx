
import styles from "../styles/sections.module.css"

export default function FeaturedBanner({el,additionalStyle}){
    return (
        <div className={`${styles[el.type]}`} 
            style={{
                backgroundImage:`url(${el.productImageUrl})`,
                ...additionalStyle
            }}
            key={el.key}
        >
            <h4>{el.name}</h4>
            <span>{el.description}</span>
            <button className={styles.shop_now_button} aria-label={`Shop Now - ${el.name}`}>
                Shop Now
                <hr />
            </button>
        </div>
    );
}