import styles from '../src/styles/SubDivisao.module.css'

export default function SubDivisao(props) {
    return (
        <div 
            style={{
                backgroundColor:props.preta ? "#000" : "#fff"
            }}
            className={styles.subDivisao}>

        </div>
    )
}