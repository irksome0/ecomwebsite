
import styles from "../styles/sections.module.css"
import ps5Image from "../assets/sections/ps5.png"
import womanImage from "../assets/sections/woman.png"
import speakersImage from "../assets/sections/speakers.png"

const arrival = [
    {
        name: "PlayStation 5", 
        description: "Black and White version of the PS5 coming out on sale.",
        productImageUrl: ps5Image,
        type:"big"
    },
    {
        name: "Women's Collection",
        description: "Featured woman collection that gives you another vibe.",
        productImageUrl: womanImage,
        type:"medium"
    },
    {
        name: "Speakers",
        description: "Amazon wireless speakers",
        productImageUrl:speakersImage,
        type: "small"
    },
    {
        name: "Speakers",
        description: "Amazon wireless speakers",
        productImageUrl:speakersImage,
        type: "small"
    }
]

export default function Featured(){
    return(
        <div className={styles.featured_section}>
            {arrival.map((el,i) => {
                if(el.type === "big"){
                    return(
                        <div className={styles.big_banner} style={{backgroundImage:`url(${el.productImageUrl})`}}>
                             <h4>{el.name}</h4>
                             <span>{el.description}</span>
                            <button className={styles.shop_now_button}> 
                                Shop Now
                                <hr width={80}/>
                            </button>
                        </div>
                    )
                }else if(el.type === "medium"){
                    return(
                        <div className={styles.medium_banner} style={{backgroundImage:`url(${el.productImageUrl})`}}>
                             <h4>{el.name}</h4>
                             <span>{el.description}</span>
                            <button className={styles.shop_now_button}> 
                                Shop Now
                                <hr width={80}/>
                            </button>
                        </div>
                    )                    
                }else{
                    return(
                        <div className={styles.small_banner} style={{gridColumnStart:i+1,gridColumnEnd:i+1, backgroundImage:`url(${el.productImageUrl})`}}>
                            <h4>{el.name}</h4>
                            <span>{el.description}</span>
                            <button className={styles.shop_now_button}> 
                                    Shop Now
                                    <hr width={80}/>
                            </button>
                        </div>
                    )
                }
            })}
        </div>
    )
}