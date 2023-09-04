import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.css"
import { faAt, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import CardPergunta from "../../components/cardPergunta"
import imgLogo from "../../assets/img/BrasaLogo (1).png"

function Faq() {
    return (
        <>
            <section className="faq-style">
                <div className="faq-glass">
                    
                    <div className="perguntas-org">
                    <CardPergunta pergunta="Como eu chego até ai?" resposta="Cep XXXXX-XXX Rua XXX Bairro XXX Cidade XXXXX"/>
                    <CardPergunta pergunta="Aceitam Boleto?" resposta="Sim, aceitamos tambem pix, cartão, bitcoin e a vista"/>
                    <CardPergunta pergunta="Voçês servem Guydon?" resposta="Infelizmente essa carne não temos no cardapio devido a sua dificuldade com prato."/>
                    <CardPergunta pergunta="Gostaria de levar Criança, tem lugares para eles?" resposta="Sim, temos um pequeno parquinho para elas brincarem com outras crianças e brinquedos."/>
                    <CardPergunta pergunta="É obrigatorio marcar Horario?" resposta="Só mente durante a noite quando estamos mais cheios, de preferencia se puder marcar um dia antes fica mais facil de conseguir vagas."/>
                    </div>

                    <div className="perguntas-org">
                    <CardPergunta pergunta="Como eu chego até ai?" resposta="Cep XXXXX-XXX Rua XXX Bairro XXX Cidade XXXXX"/>
                    <CardPergunta pergunta="Aceitam Boleto?" resposta="Sim, aceitamos tambem pix, cartão, bitcoin e a vista"/>
                    <CardPergunta pergunta="Voçês servem Guydon?" resposta="Infelizmente essa carne não temos no cardapio devido a sua dificuldade com prato."/>
                    <CardPergunta pergunta="Gostaria de levar Criança, tem lugares para eles?" resposta="Sim, temos um pequeno parquinho para elas brincarem com outras crianças e brinquedos."/>
                    <CardPergunta pergunta="É obrigatorio marcar Horario?" resposta="Só mente durante a noite quando estamos mais cheios, de preferencia se puder marcar um dia antes fica mais facil de conseguir vagas."/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Faq