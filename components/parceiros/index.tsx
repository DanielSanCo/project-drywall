import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { useRef } from 'react';

const carrosel = [
    { img: '/images/logo/logo.png', link: '/produtos/categoria/A' },
    { img: '/images/parceiros/amanco.png', link: '/produtos/categoria/A' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/B' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/B' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/C' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/C' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/C' },
    { img: '/images/logo/logo.png', link: '/produtos/categoria/C' },
]

const Parceiros = () => {
    const carousel = useRef(null)

    const handleLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    return (
        <div className={styles.container}>
            <div className={styles.parceiros}>
                PARCEIROS
            </div>
            <div className={styles.geralArea}>
                <div className={styles.arrow} onClick={() => handleLeftClick()}>
                    <img src="/images/favCons/favArrow.png" alt="" />
                </div>
                <div className={styles.parceirosArea} ref={carousel}>
                    {carrosel.map((item, index) => (
                        <div key={index}>
                            <a href={item.link}><img src={item.img} alt="" /></a>
                        </div>
                    ))}
                </div>
                <div className={styles.arrow} onClick={() => handleRightClick()}>
                    <img src="/images/favCons/favArrowR.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Parceiros;