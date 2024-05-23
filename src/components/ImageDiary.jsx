"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ImageDiary() {
  const [dataList, setDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);


  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=sdHwzNisgns87pzxMTulTuoReebx3u6hhsbw6DDv")
      .then((result) => {
        const data = result.data;
        console.log(data);
        setDataList([data]); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const openModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedDescription(null);

  };

  return (
    <>
      {dataList.map((data, index) => (
        <div key={index} className="flex-1 items-center text-center font-[helvetica]">
          <button onClick={() => openModal(data.hdurl,data.explanation)}>
            <Image 
              src={data.url}
              alt="Diary image"
              width={350}
              height={300}
            />
          </button>
          <p>{data.title}</p>
        </div>
      ))}

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-[#2e3033f0] p-2 rounded">
            <button
              onClick={closeModal}
              className="absolute top-[3px] right-2 m-2 text-white text-shadow z-51"
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Image"
              width={460}
              height={250}
            />
            <p
             className="text-[10px] gap-7 absolute bottom-4 font-bold text-[#ffffff96] opacity-0 transition-opacity hover:opacity-[100%] m-2 text-shadow"
            >{selectedDescription}</p>

          </div>
        </div>
      )}
    </>
  );
}
