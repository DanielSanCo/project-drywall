import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';
import parceiros from '@/utils/marcas';

const social = [
    { name: '', img: '/images/social/whatsapp.png', link: 'https://web.whatsapp.com/send?phone=552135562929' },
    { name: '', img: '/images/social/insta.png', link: 'https://www.instagram.com/' }
]

const navList = [
    { name: 'Inicio', img: '', link: '/' },
    { name: 'Produtos', img: '', link: '/produtos' },
    { name: 'Contato', img: '', link: '/contato' },
    { name: 'Sobre nós', img: '', link: '/sobre' }
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href='/'><div className={styles.logo}>
                <Image src="/images/logo/logo.png" alt="" />
                <h2>DOUTOR DRYWALL</h2>
            </div></Link>
            <div className={styles.social}>
                {social.map((item, index) => (
                    <Image src={item.img} alt="" key={index} />
                ))}
            </div>
            <div className={styles.infos}>

                <div className={styles.contato}>
                    <div style={{ fontWeight: 'bold' }}>Contato</div>
                    <div>+213556-2929</div>
                    <div>drmateriaisedrywall@gmail.com</div>
                    <div>CNPJ: 47.013.409/001-06</div>
                </div>

                <div>
                    <div style={{ fontWeight: 'bold' }}>Localização</div>
                    <div>Rio de Janeiro - RJ</div>
                    <div>Estr. dos Bandeirantes</div>
                    <div>3736 - Curicica</div>
                </div>

            </div>
            <div className={styles.parceiros}>
                {parceiros.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <div className={styles.item}>
                            <Image src={item.img} alt="" key={index} />
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.menu}>
                {navList.map((item, index) => (
                    <div className={styles.itemMenu} key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </div>
                ))}
            </div>
            <div className={styles.direito}>© 2023 Doutor Drywall. Todos os direitos reservados.</div>
        </div>
    )
}

export default Footer;