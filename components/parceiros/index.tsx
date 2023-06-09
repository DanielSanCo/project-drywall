import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { MutableRefObject, useRef } from 'react';
import marca from '@/utils/marcas';

const Parceiros = () => {
    const carousel = useRef() as MutableRefObject<HTMLDivElement>;

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
                    <Image src="/images/favCons/favArrow.png" alt="" />
                </div>
                <div className={styles.parceirosArea} ref={carousel}>
                    {marca.map((item, index) => (
                        <div key={index}>
                            <Link href={item.link}><Image src={item.img} alt="" /></Link>
                        </div>
                    ))}
                </div>
                <div className={styles.arrow} onClick={() => handleRightClick()}>
                    <Image src="/images/favCons/favArrowR.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Parceiros;