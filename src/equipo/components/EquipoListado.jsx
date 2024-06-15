import React from "react";

const EquipoListado = ({equipo =''}) => {
    const EquipoInformacion = {
        'DiseñoGrafico' : [
            {
                "Edad": 25,
                "Rol": "Arg",
                "Nombre": "Franco Petroli",
                "Num": 1,
                "Linkedin": ""
            },
            {
                "Edad": 27,
                "Rol": "Arg",
                "Nombre": "Roberto Ramírez",
                "Num": 12,
                "Linkedin": ""
            }
        ],
        'Software' : [
            {
                "Edad": 32,
                "Rol": "Arg",
                "Nombre": "Federico Rassmusen",
                "Num": 23,
                "Linkedin": ""
            },
            {
                "Edad": 33,
                "Rol": "Arg",
                "Nombre": "Pier Barrios",
                "Num": 2,
                "Linkedin": ""
            },
            {
                "Edad": 25,
                "Rol": "Chi",
                "Nombre": "Thomas Galdames",
                "Num": 3,
                "Linkedin": ""
            },
            {
                "Edad": 26,
                "Rol": "Arg",
                "Nombre": "Lucas Arce",
                "Num": 4,
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Manuel Guill\u00e9n",
                "Num": 32,
                "Linkedin": ""
            }
        ],
        'Comercial' : [
            {
                "Edad": 26,
                "Rol": "Uru",
                "Nombre": "Nicol\u00e1s Fern\u00e1ndez",
                "Num": 13,
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Bruno Leyes",
                "Num": 5,
                "Linkedin": ""
            },
            {
                "Edad": 21,
                "Rol": "Uru",
                "Nombre": "Vicente Poggi",
                "Num": 25,
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Mariano Santiago",
                "Num": 16,
                "Linkedin": ""
            },
            {
                "Edad": 23,
                "Rol": "Arg",
                "Nombre": "Tom\u00e1s Pozzo",
                "Num": 6,
                "Linkedin": ""
            }
        ],
        'Hardware' : [
            {
                "Edad": 26,
                "Rol": "Arg",
                "Nombre": "Juan Bautista Cejas",
                "Num": 7,
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Daniel Barrea",
                "Num": 36,
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Nahuel Ulariaga",
                "Num": 9,
                "Linkedin": ""
            }
        ]
    };
    const info = EquipoInformacion[equipo];
    return(
        <>
            <h3 className="text-3xl text-marca-verdeoscuro">{equipo}</h3>
            <div id={equipo} className="shadow-md rounded-2xl grid items-center">
                <table>
                    <thead className='bg-gray-500 rounded-2xl text-white'>
                        <tr>
                            <th className="pb-1 font-bold uppercase text-large">Num</th>
                            <th className="font-bold uppercase text-large">Nombre</th>
                            <th className="font-bold uppercase text-large">Rol</th>
                            <th className="font-bold uppercase text-large">Edad</th>
                            <th className="font-bold uppercase text-large">Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((intg)=>(
                            <tr className='' key={intg.Num}>
                                <td className='pb-1 text-tiny uppercase font-bold text-center'>{intg.Num}</td>
                                <td className='text-tiny uppercase font-bold text-center'>{intg.Nombre}</td>
                                <td className='text-tiny uppercase font-bold text-center'>{intg.Rol}</td>
                                <td className='text-tiny uppercase font-bold text-center'>{intg.Edad} Años</td>
                                <td className='text-tiny uppercase font-bold flex justify-center'><a href="https://www.linkedin.com/groups/14465076/" target="_blank"><img src="../../../img/logos/LogosLinkedinIcon.png" className="w-4"/></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EquipoListado