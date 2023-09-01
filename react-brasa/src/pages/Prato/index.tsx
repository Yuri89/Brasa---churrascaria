import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import imgCarne from '../../assets/img/imgcardapio/imgcarne/carne1.png'

import './style.css'

function Prato() {

    const { nomePrato } = useParams(); // Pega o parâmetro da URL

    const [pratosData, setPratosData] = useState<any[]>([{
        'CarneVermelha': [
            {
                "id": 11,
                "nome": "Prato1",
                "descricao": "Uma deliciosa carne vermelha grelhada.",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne1.png"
            },
            {
                "id": 12,
                "nome": "Prato2",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne2.png"
            },
            {
                "id": 13,
                "nome": "Prato3",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne3.png"
            },
            {
                "id": 14,
                "nome": "Prato4",
                "descricao": "Carne vermelha suculenta com acompanhamentos.",
                "foto": "/src/assets/img/imgcardapio/imgcarne/carne4.png"
            }
        ],
        "Costela": [
            {
                "id": 21,
                "nome": "Prato 3",
                "descricao": "Costela defumada e macia com molho especial.",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            {
                "id": 22,
                "nome": "Prato 3",
                "descricao": "Costela defumada e macia com molho especial.",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            {
                "id": 23,
                "nome": "Prato 3",
                "descricao": "Costela defumada e macia com molho especial.",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            },
            {
                "id": 24,
                "nome": "Prato 3",
                "descricao": "Costela defumada e macia com molho especial.",
                "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
            }


        ]
    }]);

    const [ foto , setFoto ] = useState<any>()
    const [ nome , setNome ] = useState<string>()
    const [ descricao , setDescricao ] = useState<string>()

    useEffect(()=>{
    const pratoEscolhido = pratosData[0][nomePrato!]
    setNome(pratoEscolhido.nome)
    setFoto(pratoEscolhido.foto)
    setDescricao(pratoEscolhido.descricao)
    })

    return (
        <div className='banner-prato'>
            <img src={foto} className='box-img'/>
            <span className='box-info'>
                <span>
                    <h1>{nome}</h1>
                    <p>{descricao}</p>
                </span>
                <button>comprar</button>
            </span>
        </div>
    );
}

export default Prato;