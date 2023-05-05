import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';

const social = [
    { name: '', img: '/images/social/whatsapp.png' },
    { name: '', img: '/images/social/whatsapp.png' },
    { name: '', img: '/images/social/whatsapp.png' },
    { name: '', img: '/images/social/whatsapp.png' },
]

const carrosel = [
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
    { img: '/images/logo/logo.png' },
]

const navList = [
    { name: 'Inicio', img: '', link: '/' },
    { name: 'Produtos', img: '', link: '/sobre' },
    { name: 'Parceiros', img: '', link: '/tecnologias' },
    { name: 'Sobre nós', img: '', link: '/contato' }
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src="/images/logo/logo.png" alt="" />
                <h2>DOUTOR DRYWALL</h2>
            </div>
            <div className={styles.social}>
                {social.map((item, index) => (
                    <img src={item.img} alt="" key={index} />
                ))}
            </div>
            <div className={styles.infos}>

                <div className={styles.contato}>
                    <div style={{ fontWeight: 'bold' }}>Contato</div>
                    <div>+2199999-9999</div>
                    <div>+2199999-9999</div>
                    <div>email@hotmail.com</div>
                </div>

                <div>
                    <div style={{ fontWeight: 'bold' }}>Localização</div>
                    <div>Rio de Janeiro - RJ</div>
                    <div>Estr. dos Bandeirantes</div>
                    <div>3736 - Curicica</div>
                </div>

            </div>
            <div className={styles.parceiros}>
                {carrosel.map((item, index) => (
                    <div className={styles.item}>
                        <img src={item.img} alt="" key={index} />
                    </div>
                ))}
            </div>
            <div className={styles.menu}>
                {navList.map((item, index) => (
                    <div className={styles.itemMenu}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className={styles.direito}>© 2023 Doutor Drywall. Todos os direitos reservados.</div>
        </div>
    )
}

export default Footer;