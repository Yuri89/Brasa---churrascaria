import "./style.css"
import { Link } from "react-router-dom"

function CardFood(props:any) {
    return (

        <>
            <div className="card" key={props.id}>
                <div className="moldura">
                    <img src={props.img} alt="" className="foto" />
                </div>

                <span>
                    <h3>{props.nomePrato}</h3>
                    <p>{props.descricaoPrato}</p>
                </span>
                <div className="caixinhaCorrecao"><Link className="botaoComida" to={"Pratos/Frango"}><span>ver mais</span></Link></div>
                
            </div>
        </>

    )
}

export default CardFood