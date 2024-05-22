import Image from "next/image"

import NasaLogo from '../assets/nasa.png'

export default function Header () {
    return (
        <>
            <header
             className="w-full h-32 flex
              items-center justify-around
              bg-[#673364] 
             
             "
             >
                <Image 
                    src={NasaLogo}
                    alt="Nasa logo"
                    className="w-[250px] relative top-2 left-[-25px]"
                />
                <div
                 className="text-[#1a0d19] flex justify-around gap-5 font-bold  text-[1.3em] ">
                    <a href="#">opção1</a>
                    <a href="#">opção1</a>
                    <a href="#">opção1</a>
                </div>
                <div className="text-[#1a0d19] mr-6">
                    <p>|||</p>
                </div>
            </header>
        </>
    )
}