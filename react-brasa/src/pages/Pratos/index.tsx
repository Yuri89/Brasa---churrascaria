import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardFood from '../../components/cardFood'
import "./style.css"



function Pratos() {
  const { prato } = useParams<any>()

  const [pratosData, setPratosData] = useState<any[]>([{
    'CarneVermelha': [
      {
        "id": 11,
        "nome": "Prato 1",
        "descricao": "Uma deliciosa carne vermelha grelhada.",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne1.png"
      },
      {
        "id": 12,
        "nome": "Prato 2",
        "descricao": "Carne vermelha suculenta com acompanhamentos.",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne2.png"
      },
      {
        "id": 13,
        "nome": "Prato 3",
        "descricao": "Carne vermelha suculenta com acompanhamentos.",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne3.png"
      },
      {
        "id": 14,
        "nome": "Prato 4",
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
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
      },
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
      },
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg"
      }


    ]
  }]);


  return (
    <main className="CarneVermelhaMain">
      <section className="CVSection">
         {pratosData.length > 0 && prato && pratosData[0][prato] ? (
    pratosData[0][prato].map((pratoInfo: any, index: number) => (
      <CardFood
        key={index}
        id={pratoInfo.id}
        nomePrato={pratoInfo.nome}
        descricaoPrato={pratoInfo.descricao}
        img={pratoInfo.foto}
      />
    ))
  ) : (
    <div>não há nada</div>
  )}
          
      </section>
    </main>
  );
}

export default Pratos;
