import React from "react";

function Footer(){
    return(
    <>   
        <footer className='flex items-center justify-between bg-marca-gris text-white pb-4 px-6 mt-10'>
            <div>
                <h4>Contactanos:</h4>
                <div className="grid mt-1">
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src="../0img/logos/MaterialSymbolsLocationOn.png"></img>
                        <p>Patricias Argentinas 56 - Maipú, Mendoza</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src="../0img/logos/MaterialSymbolsCallSharp.png"></img>
                        <p>+54 9 261 xxx-xxxx</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src="../0img/logos/MaterialSymbolsMail.png"></img>
                        <p>EcoSaverStrategies@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="mr-12">
                    <h4>Seguinos en nuestras redes</h4>
                    <div className="grid justify-items-center mt-1">
                        <div>
                            <a className="text-white text-lg no-underline" href="https://www.instagram.com/" target="_blank">
                                <img className="w-24" src="../0img/logos/LogosInstagram.png" alt="Instagram"></img>
                            </a>
                        </div>
                        <div className='mt-2'>
                            <a className="text-white text-lg no-underline" href="https://www.linkedin.com/groups/14465076/" target="_blank">
                                <img className="w-24" src="../0img/logos/LogosLinkedin.png" alt="LinkedIn"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Mendoza Futura</h4>
                    <div className="grid justify-items-center mt-1">
                        <div>
                            <a className="text-white text-lg no-underline" href="https://www.instagram.com/mendozafutura.comunidad/" target="_blank">
                                <img className="w-24" src="../0img/logos/LogosInstagram.png" alt="Instagram"></img>
                            </a>
                        </div>
                        <div className='mt-2'>
                            <a className="text-white text-lg no-underline" href="https://www.mendoza.gov.ar/economia/mendoza-futura-2024/" target="_blank">
                                <img className="w-24" src="../0img/logos/LogosConectadosMendozaFutura.png" alt="Conectados por Mendoza Futura"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}
export default Footer