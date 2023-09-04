import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import imgCarne from '../../assets/img/imgcardapio/imgcarne/carne1.png'

import './style.css'

function Prato() {

    //aqui eu quero pegar o parametro usar para selecionar um objeto da lista
    const { retornoPrato } = useParams<string>()
    const { nomeDoPrato } = useParams<string>()

    //lista
    const [pratosData, setPratosData] = useState<any[]>([{
        'CarneVermelha': {
            "Prato1": {
                "id": 11,
                "nome": "Prato1",
                "descricao": "Uma deliciosa carne vermelha grelhada.",
                "preco": "R$ 14,90",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne1.png"
            },
            "Prato2": {
                "id": 12,
                "nome": "Prato2",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "preco": "R$ 11,90",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne2.png"
            },
            "Prato3": {
                "id": 13,
                "nome": "Prato3",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "preco": "R$ 15,20",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne3.png"
            },
            "Prato4": {
                "id": 14,
                "nome": "Prato4",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "preco": "R$ 18,50",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne4.png"
            }
        },
        "Costela": {
            "Prato5": {
                "id": 21,
                "nome": "Prato5",
                "descricao": "Costela defumada e macia com molho especial.",
                "preco": "R$ 1,00",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            "Prato6": {
                "id": 22,
                "nome": "Prato6",
                "descricao": "Costela defumada e macia com molho especial.",
                "preco": "R$ 1,00",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            "Prato7": {
                "id": 23,
                "nome": "Prato7",
                "descricao": "Costela defumada e macia com molho especial.",
                "preco": "R$ 1,00",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            "Prato8": {
                "id": 24,
                "nome": "Prato8",
                "descricao": "Costela defumada e macia com molho especial.",
                "preco": "R$ 1,00",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            }


        }
    }]);

    const [hoverText, setHoverText] = useState(''); // Estado para armazenar o texto do hover

    const handleMouseOver = () => {
        setHoverText("Comprar"); // Define o texto do hover
    };

    const handleMouseLeave = () => {
        setHoverText(''); // Limpa o texto quando o mouse sai
    };

    return (
        <div className='banner-prato'>

            <>
                <img src={pratosData[0][retornoPrato!][nomeDoPrato!].foto} className='box-img' />
                <span className='box-info'>
                    <span>
                        <h1>{pratosData[0][retornoPrato!][nomeDoPrato!].nome}</h1>
                        <p>{pratosData[0][retornoPrato!][nomeDoPrato!].descricao}</p>
                    </span>
                    
                    <button
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoverText ? hoverText : pratosData[0][retornoPrato!][nomeDoPrato!].preco}
                    </button>
                    
                </span>
            </>

        </div>
    );
}

export default Prato;