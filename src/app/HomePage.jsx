/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import ImageDiary from "@/components/ImageDiary";
import Footer from "@/components/Footer";


export default function HomePage () {


    return (

        <>
        
        <Header />
    
        
        <div className="font-[helvetica]">

            <h1 className="font-bold m-6 text-[1.7em]">
                A nasa dispoem de sua informações, e nós mastigamos para você</h1>
            <div className="flex justify-between items-center gap-20"> 
                <div className="text-5 max-w-[450px] m-10">

                    <p >
                    (National Aeronautics and Space Administration — NASA) é uma agência do governo federal dos Estados Unidos responsável 
                    pela pesquisa e desenvolvimento de tecnologias e programas de exploração espacial. Sua missão oficial é
                    "fomentar o futuro na pesquisa, descoberta e exploração espacial". A NASA foi criada em 29 de julho de 1958, substituindo seu antecessor
                    </p>
                </div>
                <ImageDiary  />

            </div>
        </div>
                <Footer />


        </>
    
);
};