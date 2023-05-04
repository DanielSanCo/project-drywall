import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';

const carrosel = [
    { img: '/images/wallpaper/empresa.jpg' },
    { img: '/images/wallpaper/empresa.jpg' },
    { img: '/images/wallpaper/empresa.jpg' },
]

const Carrosel = () => {
    const carousel = useRef<null | HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className={styles.carousel}>
            <motion.div
                className={styles.carrosel}
                whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className={styles.inner}
                    ref={carousel}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}>
                    {carrosel.map((item, index) => (
                        <motion.div className={styles.item} key={index}>
                            <img src={item.img} alt="texto" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carrosel;