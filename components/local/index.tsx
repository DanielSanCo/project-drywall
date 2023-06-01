import { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Local = () => {
    const [assunto, setAssunto] = useState('')
    const [texto, setTexto] = useState('')
    const [email, setEmail] = useState('')

    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const changeAssunto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAssunto(event.target.value)
    }
    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>Localização</h1>
                <h3>Estamos localizados em...</h3>
            </div>
            <div className={styles.mapa}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8680342639377!2d-43.3776708!3d-22.955086700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd97282f3ac31%3A0x49482fa391831b65!2sEstr.%20dos%20Bandeirantes%2C%203736%20-%20Curicica%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-114!5e0!3m2!1spt-BR!2sbr!4v1683309006957!5m2!1spt-BR!2sbr" 
                    width="300" 
                    height="300" 
                    loading="lazy" 
                ></iframe>
                <div className={styles.contato}>
                    <h1>Entrar em Contato</h1>
                    <div className={styles.nome}>
                        <div>
                            <Image src="/images/favCons/italian.png" alt="" />
                        </div>
                        <input type="text" placeholder='Nome' />
                    </div>
                    <div className={styles.nome}>
                        <div>
                            <Image src="/images/favCons/mail.png" alt="" />
                        </div>
                        <input type="text" placeholder='E-mail' value={email} onChange={() => changeEmail} />
                    </div>
                    <div className={styles.nome}>
                        <div>
                            <Image src="/images/favCons/home.png" alt="" />
                        </div>
                        <input type="text" placeholder='Assunto' value={assunto} onChange={() => changeAssunto} />
                    </div>
                    <div className={styles.nome}>
                        <div>
                            <Image src="/images/favCons/home.png" alt="" />
                        </div>
                        <input type="text" placeholder='Texto' value={texto} onChange={() => changeText} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Link href={`mailto:drmateriaisedrywall@gmail.com?subject=${assunto}&cc=${email}&body=${texto}`}>
                            <div className={styles.button}>Enviar</div>
                        </Link>
                        <div className={styles.button} style={{ backgroundColor: 'green' }}>Whatsapp</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Local;