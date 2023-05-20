import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import produtos from '@/utils/produtos';

type Produto = {
    name: string,
    categoria: string,
    descricao: string,
    img: string,
    marca: string,
    dispo: string
}

const Produtos = () => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)
    const [itens, setItens] = useState<Produto[]>([])

    const loadItens = async () => {
        let response = await fetch('https://apidoutordrywall.onrender.com/produtos/');
        let json = await response.json();

        setItens(json);
    }

    useEffect(() => {
        loadItens()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>PRODUTOS</h1>
                <h3>Conheça nossa diversidade de produtos</h3>
            </div>
            <div className={styles.produtosArea}>
                {itens.map((item, index) => (
                    <>
                        {index <= 11 ?
                            <div className={styles.item} key={index} onMouseMove={() => { setDisplay('flex'), setId(index) }} onMouseOut={() => setDisplay('none')}>
                                <a href={`/produtos/item/${index}`}><div className={styles.produtoImg}>
                                    <img src={item.img} alt="" />
                                </div>
                                    <div className={styles.produtoName}>
                                        <div>{item.name}</div>
                                    </div></a>
                                <div className={styles.contatoArea}>
                                    {id >= 0 && index === id ?
                                        <a target="_blank" href={`https://web.whatsapp.com/send?phone=552135562929&text=doutordrywall.com/produtos/item/${index}`}>
                                            <div className={styles.zap} style={{ display: display }}>
                                                <div>Entrar em Contato</div>
                                                <img src="/images/social/whatsapp.png" alt="" />
                                            </div>
                                        </a>
                                        :
                                        ''}
                                </div>
                            </div>
                            :
                            ''}
                    </>
                ))}
            </div>
            <a href='/produtos'><div className={styles.allProd}>TODOS OS PRODUTOS</div></a>
        </div>
    )
}

export default Produtos;