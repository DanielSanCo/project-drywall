import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useState } from 'react';
import produtos from '@/utils/produtos';

const Produtos = () => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>PRODUTOS</h1>
                <h3>Conheça nossa diversidade de produtos</h3>
            </div>
            <div className={styles.produtosArea}>
                {produtos.map((item, index) => (
                    <div className={styles.item} key={index} onMouseMove={() => {setDisplay('flex'), setId(index)}} onMouseOut={() => setDisplay('none')}>
                        <a href={`/produtos/item/${index}`}><div className={styles.produtoImg}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.produtoName}>
                            <div>{item.name}</div>
                        </div></a>
                        <div className={styles.contatoArea}>
                            {id >= 0 && index === id ?
                            <div className={styles.zap} style={{ display: display }}>
                                <div>Entrar em Contato</div>
                                <img src="/images/social/whatsapp.png" alt="" />
                            </div>
                            :
                            '' }
                        </div>
                    </div>
                ))}
            </div>
            <a href='/produtos'><div className={styles.allProd}>TODOS OS PRODUTOS</div></a>
        </div>
    )
}

export default Produtos;