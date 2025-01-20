
import styles from "../styles/navigation.module.css"

import searchIcon from "../assets/navigation/search-icon.svg"
import {  useRef } from "react"


export default function Searchbar({search, searchQuery, hidden}){
    const inputRef = useRef();
    
    const handleSearch = () => {
        if(search){
            search(inputRef.current.value)
        }
    }
    
    if(hidden) 
        return null;
    return(
         <div className={styles.searchbar} >
            <input name="query" ref={inputRef} value={searchQuery ?? ""} onInput={() => handleSearch()} type="text" placeholder="What are you looking for?"/>
            <img src={searchIcon} alt="Search"/>
        </div>
    )
}