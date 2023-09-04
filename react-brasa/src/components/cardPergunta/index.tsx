import { useEffect, useState } from "react"
import "./style.css"

function cardPergunta(props:any) {

    const [textstyle1 , setTextstyle1] = useState<string>("button-faq off")
    const [textstyle2 , setTextstyle2] = useState<string>("Pergunta off")

    function Ativar(){
        if(textstyle1 === "button-faq off"){
            setTextstyle1("button-faq active")
            setTextstyle2("Pergunta active")
        }else{
            setTextstyle1("button-faq off")
            setTextstyle2("Pergunta off")
        }
    }

    return (
    <>
        <div className="cardPergunta">
            <div className={textstyle1} onClickCapture={Ativar}>&gt;</div>
            <span className={textstyle2}>
                <div><h1 className="perguntaStyle">{props.pergunta}</h1></div>
                <p>{props.resposta}</p>
            </span>
        </div>
    </>
    )
}

export default cardPergunta