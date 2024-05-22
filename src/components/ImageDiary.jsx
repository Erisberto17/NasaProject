"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ImageDiary() {
  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=sdHwzNisgns87pzxMTulTuoReebx3u6hhsbw6DDv")
      .then((result) => {
        const data = result.data;
        console.log(data);

        // Se a API retorna um único objeto, coloque-o dentro de um array
        setDataList([data]); // Colocamos o objeto em um array para que `map` funcione
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {Array.isArray(dataList) && dataList.length > 0 ? (
        dataList.map((data, index) => (
          <Image 
            key={index}
            src={data.url} // Certifique-se de que `data.url` contém a URL da imagem
            alt={data.title} // Use um campo relevante para a descrição da imagem
            width={500} // Defina a largura conforme necessário
            height={500} // Defina a altura conforme necessário
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
