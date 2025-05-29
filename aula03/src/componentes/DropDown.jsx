import {links} from "./dados"
import  styles from "./DropDown"

export default function DropDown(){

    return(
        <>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown</button>
                <div >
                    {links.map(link => (
                        <a href="#">{link}</a>
                    ))}

                </div>
            </div>
        </>
    )
}