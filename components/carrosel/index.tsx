import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';

const Carrosel = () => {
    return (
        <div className={styles.carrosel}>
            <img src="/images/wallpaper/empresa.jpg" alt="" />
        </div>
    )
}

export default Carrosel;