
import styles from "../styles/sections.module.css"

import categoryPhone from "../assets/sections/Category-CellPhone.svg"
import categoryComputer from "../assets/sections/Category-Computer.svg"
import categorySmartWatch from "../assets/sections/Category-SmartWatch.svg"
import categoryCamera from "../assets/sections/Category-Camera.svg"
import categoryHeadphones from "../assets/sections/Category-Headphone.svg"
import categoryGaming from "../assets/sections/Category-Gamepad.svg"

const categories = [
    {name:"Phones", icon: categoryPhone},
    {name: "Computers", icon: categoryComputer},
    {name: "SmartWatch", icon: categorySmartWatch},
    {name: "Camera", icon: categoryCamera},
    {name: "Headphones", icon: categoryHeadphones},
    {name: "Gaming", icon: categoryGaming}
]

export default function Categories(){
    return(
        <div className={styles.categories_container}>
            {categories.map(category => {
                return(
                    <div className={styles.category} key={category.name}>
                        <img src={category.icon} alt="Icon" />
                        <span>{category.name}</span>
                    </div>
                )
            })}
        </div>
    )
}