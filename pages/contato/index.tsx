import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Contato = () => {
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [texto, setTexto] = useState('')

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
            <Head>
                <title>Contato - Doutor Drywall</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.contato}>
                <h1>FALE CONOSCO</h1>
                <div>Contate-nos para mais informações sobre produtos e serviços que dispomos.</div>
            </div>
            <div className={styles.center}>
                <div className={styles.centerInfoContato}>
                    <div className={styles.titulo}>Informações de Contato</div>
                    <div className={styles.infoContato}>
                        <div className={styles.eachInfo}>
                            <div>
                                <Image src="/images/favCons/local.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>Est. dos Bandeirantes</span>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.eachInfo}>
                            <div>
                                <Image src="/images/favCons/email.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>E-mail</span>
                                <span>drmateriaisedrywall@gmail.com</span>
                            </div>
                        </div>
                        <div className={styles.eachInfo}>
                            <div>
                                <Image src="/images/favCons/phone-call.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>Telefone</span>
                                <span>+213556-2929</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.centerContato}>
                    <div className={styles.titulo}>Envie uma Mensagem</div>
                    <div className={styles.inputs}>
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
                                <Image src="/images/favCons/mail.png" alt="" />
                            </div>
                            <input type="text" placeholder='Assunto' value={assunto} onChange={() => changeAssunto} />
                        </div>
                        <div className={styles.nome}>
                            <div>
                                <Image src="/images/favCons/home.png" alt="" />
                            </div>
                            <textarea placeholder='Texto' value={texto} onChange={() => changeText}/>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Link href={`mailto:drmateriaisedrywall@gmail.com?subject=${assunto}&cc=${email}&body=${texto}`}>
                                <div className={styles.button}>Enviar</div>
                            </Link>
                            <Link target="_blank" href={`https://web.whatsapp.com/send?phone=552135562929&text=${texto}`}>
                                <div className={styles.button} style={{ backgroundColor: 'green' }}>Whatsapp</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <h1>Mapa</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8680342639377!2d-43.3776708!3d-22.955086700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd97282f3ac31%3A0x49482fa391831b65!2sEstr.%20dos%20Bandeirantes%2C%203736%20-%20Curicica%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-114!5e0!3m2!1spt-BR!2sbr!4v1683309006957!5m2!1spt-BR!2sbr" width="300" height="300" loading="lazy" ></iframe>
            </div>
        </div>
    )
}

export default Contato;