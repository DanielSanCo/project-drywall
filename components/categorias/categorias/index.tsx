import categoria from "@/utils/categoria"
import styles from './style.module.css';
import { useState } from "react";

const Categorias = () => {
    const [count, setCount] = useState(0)
    const [itemNumber, setItemNumber] = useState(0)

    return (
        <div className={styles.categorias}>
            <h3>CATEGORIA</h3>
            {categoria.map((item, index) => (
                <a href={item.link} key={index}>
                    <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                        {item.name}
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Categorias;