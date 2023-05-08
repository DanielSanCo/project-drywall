import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useState } from 'react';
import produtos from '@/utils/produtos';
import Head from 'next/head';
import categoria from '@/utils/categoria';
import { useRouter } from 'next/router';

const pagamento = [
    { img: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },
    { img: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },
    { img: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },
    { img: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },

]

const Produtos = () => {
    const [display, setDisplay] = useState('none')
    const [count, setCount] = useState(0)
    const router = useRouter()

    const prodId = router.query.prodId ? +router.query.prodId : 0

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos - Doutor Drywall</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.road}>
                <div>produtos/item/{produtos[prodId].name}</div>
            </div>
            <div className={styles.item}>
                <div className={styles.prodImg}>
                    <img src={produtos[prodId].img} alt="" />
                </div>
                <div className={styles.prodInfo}>
                    <div className={styles.prodInfo1}>
                        <h1>{produtos[prodId].name}</h1>
                        <div className={styles.marca}>Marca: {produtos[prodId].parceiro}</div>
                        {produtos[prodId].dispo === 'Disponivel' ?
                            <div>Disponibilidade: <span style={{ color: 'green' }}>{produtos[prodId].dispo}</span></div>
                            :
                            <div>Disponibilidade: <span style={{ color: 'red' }}>{produtos[prodId].dispo}</span></div>
                        }
                    </div>
                    <div className={styles.zapInfo}>
                        As compras de nossos produtos são negociadas via Whatsapp, não vendemos diretamente pelo site.
                    </div>
                    <div className={styles.zapButton}>
                        CLIQUE PARA COMPRAR
                        <img src="/images/social/whatsapp.png" alt="" />
                    </div>
                    <div className={styles.entrega}>
                        Entregamos e combinamos a entrega de seus produtos
                    </div>
                    <div className={styles.pagamento}>
                        <div>FORMAS DE PAGAMENTO</div>
                        <div className={styles.itens}>
                            {pagamento.map((item, index) => (
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.descricao}>
                <div className={styles.detalhe}>DETALHES DO PRODUTO</div>
                <div><span className={styles.Column}>NOME:</span> {produtos[prodId].name}</div>
                <div><span className={styles.Column}>MARCA:</span> {produtos[prodId].parceiro}</div>
                <div><span className={styles.Column}>INFORMAÇÔES</span></div>
                <div>{produtos[prodId].desc}</div>
            </div>
        </div>
    )
}

export default Produtos;