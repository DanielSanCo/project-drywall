import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useRef } from 'react';

const categorias = [
    {name: 'Limpeza', img: '/images/limpeza.jpg'},
    {name: 'Limpeza', img: '/images/limpeza.jpg'},
    {name: 'Limpeza', img: '/images/limpeza.jpg'},
    {name: 'Limpeza', img: '/images/limpeza.jpg'},
]

const Categorias = () => {


    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>CATEGORIAS</h1>
                <h3>Procure o que mais deseja</h3>
            </div>
            <div className={styles.categoriaArea}>
                {categorias.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.produtoImg} >
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.categoriaName}>
                            <div>{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categorias;