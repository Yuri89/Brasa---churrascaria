import "./style.css"


import imgRest1 from "../../assets/img/restaurante1.jpg"
import imgSelo from "../../assets/img/Group1.png"
import imgFolhas from "../../assets/img/folhas.svg"
import imgCarne1 from "../../assets/img/imgcardapio/imgcarne/carne1.png"
import imgCarne2 from "../../assets/img/imgcardapio/imgcarne/carne2.png"
import imgCarne3 from "../../assets/img/imgcardapio/imgcarne/carne3.png"

import CardFood from "../../components/cardFood"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReceipt } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { faMobile } from "@fortawesome/free-solid-svg-icons"


function Home() {

    return (

        <>
            <main>
                <section className="secao1">
                    <div className="banner">
                        <h1>Seu churrasco aqui</h1>
                    </div>
                </section>

                <section className="secao2">

                    <div className="orgCaixa">
                        <span>
                            <h2>Destaque</h2>
                            <h3>mais refinadas</h3>
                        </span>

                        <div className="orgCard">
                            <CardFood img={imgCarne1} nomePrato="patinho dourado" descricaoPrato="prato muito saboreado"/>
                            <CardFood img={imgCarne2} nomePrato="patinho dourado" descricaoPrato="prato muito saboreado"/>
                            <CardFood img={imgCarne3} nomePrato="patinho dourado" descricaoPrato="prato muito saboreado"/>

                        </div>

                    </div>

                </section>

                <section className="paralax"></section>

                <section className="secao3">
                    <h2>Venha nos Conhecer e Apreciar</h2>
                    <div className="orgCaixa2">
                        <img src={imgRest1} alt="" />
                        <span>
                            
                            <h3>Sobre o Restaurante</h3>
                            <p>
                                <ul>
                                    <li>Temos rodizio</li>
                                    <li>Temos uma variedade no cardapio</li>
                                    <li>Temos comida vegana</li>
                                    <li>Aceitamos cartão, a vista e pix</li>
                                </ul>

                                Esse restaurante atende os variados publicos
                            </p>
                        </span>

                    </div>
                    
                </section>

                <section className="paralax"></section>

                <section className="secao4">

                    <div className="orgCaixa3">

                        <h2>Temos Profissionalismo no Atendimento</h2>

                        <div className="selos">
                            <span>
                                <h3>Durante Muito Tempo</h3>
                                <p>Nos preocupamos com nossos clientes em oferecer o melhor serviço possivel e totalmente personalizado</p>
                            </span>
                            <div className="div1selo">
                            <span>
                                <FontAwesomeIcon icon={faReceipt} size="3x"/>
                                Comanda Rapida e Personalizada
                                </span>
                                <span>
                                <FontAwesomeIcon icon={faMobile} size="3x"/>
                                Funciona pedidos Via Mobile
                                </span>
                            </div>
                            <div className="div2selo">
                            <span>
                                <FontAwesomeIcon icon={faTruck} size="3x"/>
                                Todos os Dias Alimentos Frescos
                                </span>
                                <span>
                                <FontAwesomeIcon icon={faDollarSign} size="3x"/>
                                Aceitamos Outras Moedas: Dollar e Euro
                                </span>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="secao5">



                </section>
            </main>

        </>

    )
}

export default Home