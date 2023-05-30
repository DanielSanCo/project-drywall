import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useRef } from 'react';
import categoria from '@/utils/categoria';
import topCategorias from '@/utils/topCategorias';

const Categorias = () => {


    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>CATEGORIAS</h1>
                <h3>Procure o que mais deseja</h3>
            </div>
            <div className={styles.categoriaArea}>
                {topCategorias.map((item, index) => (
                    <>
                        {index <= 8 ?
                            <div className={styles.item} key={index}>
                                <a href={item.link} key={index}><div className={styles.produtoImg} >
                                    <img src={item.img} alt="" />
                                </div>
                                    <div className={styles.categoriaName}>
                                        <div>{item.name}</div>
                                    </div></a>
                            </div>
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