import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import categoria from '@/utils/categoria';
import { useRouter } from 'next/router';
import Categorias from '@/components/categorias/categorias';

type Produto = {
    name: string,
    categoria: string,
    subCategoria: string,
    descricao: string,
    img: string,
    marca: string,
    dispo: string
}

const Produtos = () => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)
    const router = useRouter()
    const [qtd, setQtd] = useState<number>(0)
    const pagina = useRef()
    const [itens, setItens] = useState<Produto[]>([])

    const loadItens = async () => {
        let response = await fetch('https://apidoutordrywall.onrender.com/produtos/');
        let json = await response.json();

        setItens(json);
    }

    useEffect(() => {
        loadItens()
    }, [])

    const cateId = router.query.categId
    const cateId2 = router.query.cateId

    let reff = 0
    const qtdItens = async () => {
        for (let i = 0; i < itens.length; i++) {
            itens[i].categoria === cateId || itens[i].marca === cateId ? reff += 1 : ''
        }
    }

    useEffect(() => {
        console.log(pagina.current?.scrollHeight, pagina.current?.offsetHeight)
        qtdItens()

    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos - Doutor Drywall</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.titulo}>
                <h1>PRODUTOS</h1>
                <h3>Conheça nossa diversidade de produtos de {cateId2}</h3>
            </div>
            <div className={styles.caminho}><Link href='/'>Home</Link> > <Link href='/produtos'>Produtos</Link> > {cateId} > {cateId2}</div>
            <div className={styles.produtosSection}>
                <Categorias cateId={cateId} />
                <div className={styles.produtosArea}>
                    <div className={styles.categoriaAtual}>
                        {cateId2}
                        <span>itens {cateId2} encontrados</span>
                    </div>
                    <div className={styles.produtoList} ref={pagina}>
                        {itens.map((item, index) => (
                            <>
                                {item.subCategoria === cateId2 || item.marca === cateId ?

                                    <div className={styles.item} key={index} onMouseMove={() => { setDisplay('flex'), setId(index) }} onMouseOut={() => setDisplay('none')}>

                                        <Link href={`/produtos/item/${index}`}>
                                            <div className={styles.marcaImg}>
                                                {item.marca}
                                            </div>
                                            {itens.length < 0 ?
                                                <div>
                                                    <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                                                </div>
                                                :
                                                <div className={styles.produtoImg}>
                                                    <Image src={item.img} alt="" />
                                                </div>
                                            }
                                            <div className={styles.produtoName}>
                                                <div>{item.name}</div>
                                            </div>
                                            
                                            {item.dispo === 'Disponivel' ?
                                                <div style={{ color: 'green', margin: '5px' }}>{item.dispo}</div>
                                                :
                                                <div style={{ color: 'red', margin: '5px' }}>{item.dispo}</div>
                                            }
                                            </Link>
                                        <div className={styles.contatoArea}>
                                                <Link target="_blank" href={`https://web.whatsapp.com/send?phone=552135562929&text=doutordrywall.com/produtos/item/${index}`}>
                                                    <div className={styles.zap}>
                                                        <div>Entrar em Contato</div>
                                                        <Image src="/images/social/whatsapp.png" alt="" />
                                                    </div>
                                                </Link>
                                        </div>
                                    </div>
                                    : ''
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Produtos;