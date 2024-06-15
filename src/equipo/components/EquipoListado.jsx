import React from "react";

const EquipoListado = ({equipo =''}) => {
    const EquipoInformacion = {
        'DiseñoGrafico' : [
            {
                "Edad": 25,
                "Rol": "Arg",
                "Nombre": "Franco Petroli",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 27,
                "Rol": "Arg",
                "Nombre": "Roberto Ramírez",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            }
        ],
        'Software' : [
            {
                "Edad": 32,
                "Rol": "Arg",
                "Nombre": "Federico Rassmusen",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 33,
                "Rol": "Arg",
                "Nombre": "Pier Barrios",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 25,
                "Rol": "Chi",
                "Nombre": "Thomas Galdames",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 26,
                "Rol": "Arg",
                "Nombre": "Lucas Arce",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Manuel Guill\u00e9n",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            }
        ],
        'Comercial' : [
            {
                "Edad": 26,
                "Rol": "Uru",
                "Nombre": "Nicol\u00e1s Fern\u00e1ndez",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Bruno Leyes",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 21,
                "Rol": "Uru",
                "Nombre": "Vicente Poggi",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Mariano Santiago",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 23,
                "Rol": "Arg",
                "Nombre": "Tom\u00e1s Pozzo",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            }
        ],
        'Hardware' : [
            {
                "Edad": 26,
                "Rol": "Arg",
                "Nombre": "Juan Bautista Cejas",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Daniel Barrea",
                "Correo": 'forexample@gmail.com',
                "Linkedin": ""
            },
            {
                "Edad": 22,
                "Rol": "Arg",
                "Nombre": "Nahuel Ulariaga",
                "Correo": 'forexample@gmail.com',
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
                        {info.map((intg)=>(
                            <tr className='' key={intg.Num}>
                                <td className='py-2 text-tiny uppercase font-bold text-center bg-marca-verdeclarito'>{intg.Edad} años</td>
                                <td className='py-2 text-tiny uppercase font-bold text-center'>{intg.Nombre}</td>
                                <td className='py-2 text-tiny uppercase font-bold text-center bg-marca-verdeclarito'>{intg.Rol}</td>
                                <td className='py-2 text-tiny uppercase font-bold flex justify-center'>
                                    <a href="https://www.linkedin.com/groups/14465076/" target="_blank">
                                        <img src="../../../img/logos/LogosLinkedinIcon.png" className="w-4"/>
                                    </a>
                                </td>
                                <td className='py-2 text-tiny uppercase font-bold text-center bg-marca-verdeclarito'>{intg.Correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EquipoListado