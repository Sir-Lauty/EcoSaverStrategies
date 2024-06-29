import React from "react";
import Presentacionimg from '../../img/Presentacion.jpg';
import Sobrenosotrosimg from '../../img/SobreNosotros.jpg';

export const CuadroInformacionHome = ({ nombre = '' , clase = '' }) => {
    const CuadroInfo = {
        Presentacion: {
            titulo: 'Una solución sustentable y eficaz para el mundo real',
            info: 'Controlá el consumo de tus dispositivos y lográ la mayor eficiencia, para un mundo mejor.',
            srcimg: Presentacionimg
        },
        SobreNosotros: {
            titulo: 'Sobre nosotros',
            info: 'Somos un grupo de emprendedores que, gracias al programa gubernamental: "Mendoza Futura"; Hemos desarrollado un proyecto en el cual administra el consumo energético en edificios particulares. Viviendas, bibliotecas, etc. Buscando la eficiencia.',
            srcimg: Sobrenosotrosimg
        }
    };

    const data = CuadroInfo[nombre];
    
    const clases = 'w-full bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-4' + clase;

    return(
        <>
            <div className={clases}>
                <div className='shrink-0'>
                    <img className='h-96 rounded-tl-3xl rounded-br-3xl' alt='Energia Solar en Mendoza' src={data.srcimg}></img>
                </div>
                <div>
                    <h3 className='text-5xl font-medium text-marca-verdeoscuro'>{data.titulo}</h3>
                    <p className='text-2xl text-slate-500'>{data.info}</p>
                </div>
            </div>
        </>
    )
}