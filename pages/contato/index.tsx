import styles from './style.module.css'

const Contato = () => {
    return (
        <div className={styles.container}>
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
                                <img src="/images/favCons/local.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>Est. dos Bandeirantes</span>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.eachInfo}>
                            <div>
                                <img src="/images/favCons/email.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>E-mail</span>
                                <span>email@hotmail.com</span>
                            </div>
                        </div>
                        <div className={styles.eachInfo}>
                            <div>
                                <img src="/images/favCons/phone-call.png" alt="" />
                                <span style={{ fontWeight: 'bold' }}>Telefone</span>
                                <span>+2199999-9999</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.centerContato}>
                    <div className={styles.titulo}>Envie uma Mensagem</div>
                    <div className={styles.inputs}>
                        <div className={styles.nome}>
                            <div>
                                <img src="/images/favCons/italian.png" alt="" />
                            </div>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className={styles.nome}>
                            <div>
                                <img src="/images/favCons/mail.png" alt="" />
                            </div>
                            <input type="text" placeholder='E-mail' />
                        </div>
                        <div className={styles.nome}>
                            <div>
                                <img src="/images/favCons/home.png" alt="" />
                            </div>
                            <textarea placeholder='Assunto' />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className={styles.button}>Enviar</div>
                            <div className={styles.button} style={{ backgroundColor: 'green' }}>Whatsapp</div>
                        </div>

                    </div>
                </div>
            </div>
                <div className={styles.map}>
                    <h1>Mapa</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8680342639377!2d-43.3776708!3d-22.955086700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd97282f3ac31%3A0x49482fa391831b65!2sEstr.%20dos%20Bandeirantes%2C%203736%20-%20Curicica%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-114!5e0!3m2!1spt-BR!2sbr!4v1683309006957!5m2!1spt-BR!2sbr" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
        </div>
    )
}

export default Contato;