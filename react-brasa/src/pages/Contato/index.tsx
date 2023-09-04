import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.css"
import { faAt, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"

function Contato() {
    return (
        <>
            <section className="contato-style">
                <div className="contato-div1">

                    <form action="https://formsubmit.co/your@email.com" method="POST">
                        <input type="text" name="nome" required placeholder="Nome"></input>
                        <input type="email" name="email" required placeholder="Email"></input>
                        <textarea placeholder="Assunto" className="form-control" name="assunto" required rows={10} cols={40}></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="contato-div2">
                    <h1 className="contato-h">Gostaria de me mandar um <FontAwesomeIcon icon={faAt} size="xs" />email?</h1>
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="10x" />
                </div>
            </section>
            <section className="mapSection">
                <h1>onde nos localizar?</h1>
                <iframe className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14626.086379572738!2d-46.67290965414438!3d-23.585619610526926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e6f06b0f89%3A0x43617829f701baf6!2sIbirapuera%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1693851952094!5m2!1spt-BR!2sbr"
                    width={800}
                    height={600}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </section>
        </>
    )
}

export default Contato