import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import categoria from '@/utils/categoria';
import { useRouter } from 'next/router';

const pagamento = [
    { img: 'https://cdn-icons-png.flaticon.com/512/1591/1591044.png' },
    { img: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },
    { img: 'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png' },
    { img: 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png' },
    { img: 'https://logodownload.org/wp-content/uploads/2019/09/boleto-logo.png' },
]

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
    const [count, setCount] = useState(0)
    const router = useRouter()
    const [itens, setItens] = useState<Produto[]>([])

    const prodId = router.query.prodId ? +router.query.prodId : 0;

    const loadItens = async () => {
        try {
            let response = await fetch('https://apidoutordrywall.onrender.com/produtos/');
            let json = await response.json();

            setItens(json);
        } catch (erro) {
            alert('Erro')
        }
    }

    useEffect(() => {
        loadItens()
    }, [])


    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos - Doutor Drywall</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {itens.map((item, index) => (
                <>
                    {index == prodId ?
                        <>
                            <div className={styles.road} key={index}>
                                <div><span><Link href="/produtos" style={{color: 'blue'}}>produtos</Link>/item/{itens[prodId].name}</span></div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.prodImg}>
                                    <Image src={itens[prodId].img} alt={`${itens[prodId].name}`} />
                                </div>
                                <div className={styles.prodInfo}>
                                    <div className={styles.prodInfo1}>
                                        <h1>{itens[prodId].name}</h1>
                                        <div className={styles.marca}>Marca: {itens[prodId].marca}</div>
                                        {itens[prodId].dispo === 'Disponivel' ?
                                            <div>Disponibilidade: <span style={{ color: 'green' }}>{itens[prodId].dispo}</span></div>
                                            :
                                            <div>Disponibilidade: <span style={{ color: 'red' }}>{itens[prodId].dispo}</span></div>
                                        }
                                    </div>
                                    <div className={styles.zapInfo}>
                                        As compras de nossos produtos são negociadas via Whatsapp, não vendemos diretamente pelo site.
                                    </div>
                                    <Link target="_blank" href={`https://api.whatsapp.com/send?phone=552135562929&text=Olá gostaria de saber o preço do produto: doutordrywall.com/produtos/item/${index}`}>
                                        <div className={styles.zapButton}>
                                            CLIQUE PARA PEDIR
                                            <Image src="/images/social/whatsapp.png" alt="" />
                                        </div>
                                    </Link>
                                    <div className={styles.entrega}>
                                        Entregamos e combinamos a entrega de seus produtos
                                    </div>
                                    <div className={styles.pagamento}>
                                        <div>FORMAS DE PAGAMENTO</div>
                                        <div className={styles.itens}>
                                            {pagamento.map((item, index) => (
                                                <div key={index}>
                                                    <Image src={item.img} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.descricao}>
                                <div className={styles.detalhe}>DETALHES DO PRODUTO</div>
                                <div><span className={styles.Column}>NOME:</span> {itens[prodId].name}</div>
                                <div><span className={styles.Column}>MARCA:</span> {itens[prodId].marca}</div>
                                <div><span className={styles.Column}>INFORMAÇÔES</span></div>
                                <div>{itens[prodId].descricao}</div>
                            </div>
                        </>
                        :
                        ''
                    }
                </>
            ))}
        </div>
    )
}

export default Produtos;