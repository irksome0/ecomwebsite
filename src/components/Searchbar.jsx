
import styles from "../styles/navigation.module.css"

import searchIcon from "../assets/navigation/search-icon.svg"


export default function Searchbar(){
    return(
         <div className={styles.searchbar}>
            <input type="text" placeholder="What are you looking for? "/>
            <img src={searchIcon} alt="Search"/>
        </div>
    )
}