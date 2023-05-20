import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';
import categoria from '@/utils/categoria';
import topCategorias from '@/utils/topCategorias';

const navList = [
    { name: 'Inicio', img: '', link: '/' },
    { name: 'Produtos', img: '', link: '/produtos' },
    { name: 'Contato', img: '', link: '/contato' },
    { name: 'Sobre nós', img: '', link: '/sobre' }
]
const socialList = [
    { name: 'Whatsapp', img: '/images/social/whatsapp.png', link: 'https://web.whatsapp.com/send?phone=552135562929' },
    { name: 'Instagram', img: '/images/social/insta.png', link: 'https://www.instagram.com/' },
]

const parceiros = [
    { name: '', img: '/images/parceiros/amanco.png' },
    { name: '', img: '/images/parceiros/perfilLider.jpg' },
    { name: '', img: '/images/parceiros/knauf.png' },
    { name: '', img: '/images/parceiros/viapol.png' },
]

const Navbar = () => {
    const [active, setActive] = useState('translateX(-100%)');
    const [buttonAnim, setButtonAnim] = useState('');
    const [buttonAnim2, setButtonAnim2] = useState('');
    const [buttonAnim3, setButtonAnim3] = useState('');
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)

    const showResponseMenu = () => {
        active === 'translateX(-100%)' ? setActive('translateX(0)') : setActive('translateX(-100%)');
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
                <div className={styles.parceriaArea}>
                    <div>PARCERIAS</div>
                    <div className={styles.parceirosList}>
                        {parceiros.map((item, index) => (
                            <div key={index}><img src={item.img} alt="" /></div>
                        ))}
                    </div>
                </div>

                <div className={styles.mobileMenu} onClick={() => (showResponseMenu(), changeAnimModule())}>
                    <div style={{ transform: buttonAnim }}></div>
                    <div style={{ opacity: buttonAnim2 }}></div>
                    <div style={{ transform: buttonAnim3 }}></div>
                </div>

                <div className={styles.verticalLine}></div>
                <a href='/'>
                    <div className={styles.logo}>
                        <img src="/images/logo/logo.png" alt="" />
                        <div className={styles.logoName}>
                            <div>Doutor Drywall<span> e Materiais</span></div>
                            <div className={styles.cellNumber}>3556-2929 / 3556-2019</div>

                        </div>
                    </div>
                </a>

                <div className={styles.verticalLine}></div>

                <div className={styles.socialArea}>
                    <div className={styles.socialItens}>
                        {socialList.map((item, index) => (
                            <a href={item.link} key={index} target='_blank'>
                                <img src={item.img} alt={item.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.test2}>
                <ul>
                    {topCategorias.map((item, index) => (
                        <>
                            <li key={index} onMouseMove={() => { setDisplay('flex'), setId(index) }} onMouseOut={() => setDisplay('none')}>
                                {item.name}
                                {id >= 0 && index === id ?
                                    <ul className={styles.ul} style={{ display: display }}>
                                        {categoria.map((item, index) => (
                                            <>
                                                {
                                                    item.categoria == topCategorias[id].name ?
                                                        <li>
                                                            <a href={item.link} style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px' }}>
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                        :
                                                        ''
                                                }
                                            </>
                                        ))}
                                    </ul>
                                    :
                                    ''
                                }
                            </li>
                            <div className={styles.cateList}></div>
                        </>
                    ))}
                    <div className={styles.line}></div>
                    <a href='/contato'><li>Contato</li></a>
                    <a href='/sobre'><li>Sobre Nós</li></a>
                </ul>
            </div>

            <div className={styles.navlist} style={{ transform: active }}>
                {navList.map((item, index) => (
                    <div key={index} onClick={() => (showResponseMenu2(), changeAnimModule())} >
                        <a href={item.link} >{item.name}</a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;