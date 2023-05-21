import categoria from "@/utils/categoria"
import styles from './style.module.css';
import { useState } from "react";
import topCategorias from "@/utils/topCategorias";

const Categorias = () => {
    const [count, setCount] = useState(0)
    const [itemNumber, setItemNumber] = useState(0)

    return (
        <div className={styles.categorias}>
            <h3>CATEGORIA</h3>
            <div>
                <h4>{topCategorias[0].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[0].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
                <h4>{topCategorias[1].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[1].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
                <h4>{topCategorias[2].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[2].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
                <h4>{topCategorias[3].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[3].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
                <h4>{topCategorias[4].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[4].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
                <h4>{topCategorias[5].name}</h4>
                {categoria.map((item, index) => (
                    <>
                        {topCategorias[5].name == item.categoria ?
                            <a href={item.link} key={index}>
                                <div className={styles.itemName} onClick={() => { setCount(count + 1) }}>
                                    {item.name}
                                </div>
                            </a>
                            :
                            ''
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default Categorias;