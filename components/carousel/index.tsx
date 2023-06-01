import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper'

const carrosel = [
    { img: '/images/wallpaper/empresa.jpg' },
]

const Carousel = () => {


    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
            >
                {carrosel.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href='/produtos'><Image src={item.img} alt="" /></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel;