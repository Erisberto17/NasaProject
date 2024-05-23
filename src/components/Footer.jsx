

export default function Footer() {


    return (

        <>
        <footer className="bg-[#190619] w-full h-40 relative">
            <div className="flex items-center justify-around m-6 p-10 pt-16 font-[helvetica] text-[12px]">
                <ul className="text-white flex-2 justify-around gap-3">
                    <li>Projeto Utilizando a <b><a href="https://api.nasa.gov/">API da Nasa</a></b> </li>
                    <li><button> Quem sou eu ? </button></li>
                    <li><button>Tecnologias Usadas</button></li>
                </ul>
                <ul className="text-white">
                    <li>
                        Projeto focado em consumir a api disponivel ao publico da nasa, <br />
                        usando apenas a documentação fornecida pela mesma
                    </li>
                </ul>
            </div>
        </footer>
        </>
    );
};