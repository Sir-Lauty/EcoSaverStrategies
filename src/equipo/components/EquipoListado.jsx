import React from "react";

const EquipoListado = ({equipo =''}) => {
    const EquipoInformacion = {
        'DiseñoGrafico' : [
            {
                "Edad": 17,
                "Rol": "Líder",
                "Nombre": "Alejo Schverdfinger ",
                "Correo": 'alejoelrasta2007@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/alejo-schverdfinger-00783b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "alejo_00011DG"
            }
        ],
        'Software' : [
            {
                "Edad": 18,
                "Rol": "Líder & Front/Back-End Devolper",
                "Nombre": "Fernando Guevara",
                "Correo": 'agu.guevara2006@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/fernando-guevara-28264330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": ""
            },
            {
                "Edad": 17,
                "Rol": "Front-End Devolper",
                "Nombre": "Lautaro Caylá",
                "Correo": 'caylalautaro@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/lautaro-caylá-84677727b/",
                "Insta": "sir_lauty"
            },
            {
                "Edad": 17,
                "Rol": "Front-End Devolper",
                "Nombre": "Nehuen Arenas",
                "Correo": 'nehuenarenas567@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/nehuen-arenas-ortubia-38635b277/",
                "Insta": ""
            }
        ],
        'Comercial' : [
            {
                "Edad": 17,
                "Rol": "Líder",
                "Nombre": "Eunice Montiveros",
                "Correo": 'eunimontiveros@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/eunice-naomi-montiveros-22926b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "euni_monti_"
            }
        ],
        'Hardware' : [
            {
                "Edad": 18,
                "Rol": "Líder",
                "Nombre": "Francisco Quinteros",
                "Correo": 'quintefran44@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/francisco-quinteros-57258430a",
                "Insta": "quinte_fran"
            },
            {
                "Edad": 18,
                "Rol": "Programador",
                "Nombre": "Nicolás Sanchez",
                "Correo": 'navarronicolas248@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/nicol%C3%A1s-sanchez-194551257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "niconavarro_07"
            }
        ]
    };
    
    const info = EquipoInformacion[equipo];

    return(
        <>
            <h3 className="text-3xl text-marca-verdeoscuro">{equipo}</h3>
            <div id={equipo} className="shadow-md rounded-2xl grid items-center">
                <table>
                    <thead className='bg-marca-gris rounded-2xl text-white'>
                        <tr>
                            <th className="w-32 font-bold uppercase text-large">Edad</th>
                            <th className="w-96 font-bold uppercase text-large">Nombre</th>
                            <th className="w-60 font-bold uppercase text-large">Rol</th>
                            <th className="w-60 font-bold uppercase text-large">Redes</th>
                            <th className="w-60 font-bold uppercase text-large">Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((intg , index)=>(
                            <tr key={index}>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Edad} años</td>
                                <td className='py-2 text-tiny font-bold text-center'>{intg.Nombre}</td>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Rol}</td>
                                <td className='py-2 text-tiny font-bold flex justify-evenly'>
                                    <a href={intg.Linkedin} target="_blank">
                                        <img src="../../0img/logos/LogosLinkedinIcon.png" className="w-4 shadow-md"/>
                                    </a>
                                    {intg.Insta != '' &&
                                        <a href={'https://www.instagram.com/' + intg.Insta} target="_blank">
                                            <img src="../../0img/logos/LogosInstagramIconBlack.png" className="w-4 shadow-md"/>
                                        </a> ||
                                        <a>
                                            <img className="w-4"/>
                                        </a>
                                    }
                                </td>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EquipoListado