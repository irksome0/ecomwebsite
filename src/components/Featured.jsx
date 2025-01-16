
import styles from "../styles/sections.module.css"
import ps5Image from "../assets/sections/ps5.png"
import womanImage from "../assets/sections/woman.png"
import speakersImage from "../assets/sections/speakers.png"
import FeaturedBanner from "./FeaturedBanner"

const arrival = [
    {
        name: "PlayStation 5", 
        description: "Black and White version of the PS5 coming out on sale.",
        productImageUrl: ps5Image,
        type:"big_banner"
    },
    {
        name: "Women's Collection",
        description: "Featured woman collection that gives you another vibe.",
        productImageUrl: womanImage,
        type:"medium_banner"
    },
    {
        name: "Speakers",
        description: "Amazon wireless speakers",
        productImageUrl:speakersImage,
        type: "small_banner"
    },
    {
        name: "Speakers",
        description: "Amazon wireless speakers",
        productImageUrl:speakersImage,
        type: "small_banner"
    }
]

export default function Featured(){
    return(
        <div className={styles.featured_section}>
            {arrival.map((el,i) => {
                return(
                    <FeaturedBanner 
                    el={
                        {
                            name:el.name,
                            description: el.description,
                            type:el.type,
                            productImageUrl:el.productImageUrl,
                            key:i
                        }
                    }
                    additionalStyle={el.type === "small_banner" ? {gridColumn: i+1} : {}}
                    />
                )
            })}
        </div>
    )
}