
import styles from "../styles/sections.module.css"
import rectangle from "../assets/sections/rectangle.svg"

export default function Section(props){
    return(
        <section className={styles.section}>
            <div className={styles.tag}>
                <img src={rectangle} alt="rectangle" />
                <span>{props.name}</span>
            </div>
            <h1>{props.title}</h1>
            {props.body}
        </section>
    )
}