import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';

const navList = [
    { name: 'Home', img: '', link: '/' },
    { name: 'Sobre', img: '', link: '/sobre' },
    { name: 'Tecnologias', img: '', link: '/tecnologias' },
    { name: 'Contate-me', img: '', link: '/contato' }
]
const socialList = [
    { name: 'Linkedin', img: '/images/linkedin2.png', link: 'https://www.linkedin.com/in/daniel-santos-corr%C3%AAa-007979217/' },
    { name: 'Github', img: '/images/github.png', link: 'https://github.com/DanielSanCo' },
    { name: 'Whatsapp', img: '/images/whatsapp.png', link: 'https://web.whatsapp.com/send?phone=5521969703202' },
]

const Navbar = () => {
    const [active, setActive] = useState('translateX(100%)');
    const [buttonAnim, setButtonAnim] = useState('');
    const [buttonAnim2, setButtonAnim2] = useState('');
    const [buttonAnim3, setButtonAnim3] = useState('');

    const showResponseMenu = () => {
        active === 'translateX(100%)' ? setActive('translateX(0)') : setActive('translateX(100%)');
    }
    const changeAnimModule = () => {
        buttonAnim === '' ? setButtonAnim('rotate(-45deg) translate(-8px, 8px)') : setButtonAnim('');
        buttonAnim2 === '' ? setButtonAnim2('0') : setButtonAnim2('');
        buttonAnim3 === '' ? setButtonAnim3('rotate(45deg) translate(-5px, -7px)') : setButtonAnim3('');
    }

    const showResponseMenu2 = () => {
        active === 'translateX(0)' ? setActive('translateX(100%)') : setActive('translateX(0)');
    }

    return (
        <nav className={styles.nav}>

            <div className={styles.test}>
                <div className={styles.logo}>
                    <img src="/images/logo/logo.png" alt="" />
                    <a href='/'><span>D</span>OUTOR<span>D</span>RYWALL</a>
                </div>
            </div>

            <div className={styles.test2}>
                <ul>
                    {navList.map((item, index) => (
                        <li key={index}><a href={item.link} style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '12px' }}>{item.name}</a></li>
                    ))}
                </ul>

            </div>
            <div className={styles.mobileMenu} onClick={() => (showResponseMenu(), changeAnimModule())}>
                <div style={{ transform: buttonAnim }}></div>
                <div style={{ opacity: buttonAnim2 }}></div>
                <div style={{ transform: buttonAnim3 }}></div>
            </div>
            {/*<div className={styles.socialArea}>
                {socialList.map((item, index) => (
                    <a href={item.link} key={index} target='_blank'><img src={item.img} alt={item.name} /></a>
                ))}
                </div>*/}
            {/*<div className={styles.navlist} style={{ transform: active }}>
                {navList.map((item, index) => (
                    <div key={index} onClick={() => (showResponseMenu2(), changeAnimModule())} ><a href={item.link} >{item.name}</a></div>
                ))}
            </div>*/}
        </nav>
    )
}

export default Navbar;