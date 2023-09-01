import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import {useState} from "react"
import { Link } from "react-router-dom"

function Footer() {


    return (
        <>
            <footer>

                <nav className="linksNavf">
                    <ul className="links">
                        <li><a href="">Contato</a></li>
                        <li><a href="">Faq</a></li>
                    </ul>
                </nav>

                <div className="icons">
                    <Link to='https://pt-br.facebook.com/'><FontAwesomeIcon className="iconImg" icon={faFacebook} size="2x" color="#E0E0E0" /></Link>
                    <Link to='https://www.instagram.com/'><FontAwesomeIcon className="iconImg" icon={faInstagram}  size="2x" color="#E0E0E0"/></Link>
                    <Link to='https://web.whatsapp.com/'><FontAwesomeIcon className="iconImg" icon={faWhatsapp}  size="2x" color="#E0E0E0"/></Link>
                    <Link to='https://www.youtube.com/'><FontAwesomeIcon className="iconImg" icon={faYoutube}  size="2x" color="#E0E0E0"/></Link>
                </div>

            </footer>
        </>
    )
}

export default Footer