import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useState } from 'react';
import produtos from '@/utils/produtos';
import Head from 'next/head';
import categoria from '@/utils/categoria';
import { useRouter } from 'next/router';

const Produtos = () => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)
    const [count, setCount] = useState(0)
    const router = useRouter()

    const cateId = router.query.cateId

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos - Doutor Drywall</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.titulo}>
                <h1>PRODUTOS</h1>
                <h3>Conheça nossa diversidade de {cateId}</h3>
                <div style={{display: 'none'}}>{count}</div>
            </div>
            <div className={styles.produtosSection}>
                <div className={styles.categoriaAtual}>{cateId}</div>
                <div className={styles.produtosArea}>
                    {produtos.map((item, index) => (
                        <>
                            {item.categoria === cateId || item.parceiro === cateId ?
                                <div className={styles.item} key={index} onMouseMove={() => { setDisplay('flex'), setId(index) }} onMouseOut={() => setDisplay('none')}>
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
                                            ''}
                                    </div>
                                </div>
                                :
                                ''
                            }
                        </>
                    ))}
                </div>
                <div className={styles.categorias}>
                    <h3>CATEGORIA</h3>
                    {categoria.map((item, index) => (
                        <a href={item.link} key={index}><div className={styles.item} onClick={() => {setCount(count + 1)}}>{item.name}</div></a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Produtos;