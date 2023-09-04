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
        "preco": "14,90",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne1.png",
        "link": "Prato1"
      },
      {
        "id": 12,
        "nome": "Prato 2",
        "descricao": "Carne vermelha suculenta com acompanhamentos.",
        "preco": "11,90",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne2.png",
        "link": "Prato2"
      },
      {
        "id": 13,
        "nome": "Prato 3",
        "descricao": "Carne vermelha suculenta com acompanhamentos.",
        "preco": "15,20",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne3.png",
        "link": "Prato3"
      },
      {
        "id": 14,
        "nome": "Prato 4",
        "descricao": "Carne vermelha suculenta com acompanhamentos.",
        "preco": "18,50",
        "foto": "/src/assets/img/imgcardapio/imgcarne/carne4.png",
        "link": "Prato4"
      }
    ],
    "Costela": [
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "preco": "1,00",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg",
        "link": "Prato1"
      },
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "preco": "1,00",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg",
        "link": "Prato1"
      },
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "preco": "1,00",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg",
        "link": "Prato1"
      },
      {
        "id": 21,
        "nome": "Prato 3",
        "descricao": "Costela defumada e macia com molho especial.",
        "preco": "1,00",
        "foto": "/src/assets/img/imgcardapio/imgcostela/costela1.jpg",
        "link": "Prato1"
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
        link={pratoInfo.link}
        preco={pratoInfo.preco}
      />
    ))
  ) : (
    <div>Infelizmente não temos está pagina: /{prato}</div>
  )}
          
      </section>
    </main>
  );
}

export default Pratos;
