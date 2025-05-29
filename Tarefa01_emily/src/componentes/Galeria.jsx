import styles from './Galeria.module.css'
import Card from './Card'
import pernalonga from '../assets/pernalonga.png'
import bob from '../assets/bob_esponja2.png'

function Galeria(){
    return (
        <>
            <div className={styles.galeria}>
                <Card nome="pernalonga" foto={pernalonga}  className={styles.personagem}/>
                <Card nome="bob esponja" foto={bob} /> 
            </div>
        </>
    )
}

export default Galeria