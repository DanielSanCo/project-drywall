import categoria from "@/utils/categoria"
import styles from './style.module.css';
import { useState } from "react";
import topCategorias from "@/utils/topCategorias";
import subCate from "@/utils/subCategorias";

type Props = {
    cateId: string | string[] | undefined
}

const Categorias = ({ cateId }: Props) => {
    const [count, setCount] = useState(0)
    const [itemNumber, setItemNumber] = useState(0)

    return (
        <div className={styles.categorias}>
            <h3>CATEGORIA</h3>
            <div>
                <h4><a href={subCate[0].link}>{cateId}</a></h4>
                {categoria.map((item, index) => (
                    <>
                        {item.subCategoria == cateId ?
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

                {cateId === '' ?
                    <>
                        {subCate.map((item, index) => (
                            <a href={item.link} key={index}>
                                <div className={styles.itemName}>
                                    {item.name}
                                </div>
                            </a>
                        ))}
                    </>
                    :
                    ''}

            </div>
        </div>
    )
}

export default Categorias;