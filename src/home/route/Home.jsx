import React from 'react'

function home() {
    return(
        <>
            <div className='grid'>
                <div className='w-full bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-4'>
                    <div className='shrink-0'>
                        <img className='h-96 rounded-tl-3xl rounded-br-3xl' alt='Energia Solar en Mendoza' src='../../../../img/mdzEnergiaSolar.jpg'></img>
                    </div>
                    <div>
                        <h3 className='text-5xl font-medium text-emerald-700'>Una solución sustentable y eficaz para el mundo real</h3>
                        <p className='text-2xl text-slate-500'>Controlá el consumo de tus dispositivos y lográ la mayor eficiencia, para un mundo mejor.</p>
                    </div>
                </div>
                <div className='w-full bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-4'>
                    <div>
                        <h3 className='text-5xl font-medium text-emerald-700'>Sobre nosotros</h3>
                        <p className='text-2xl text-slate-500'>Somos un grupo de emprendedores que, gracias al programa gubernamental: "Mendoza Futura"; Hemos desarrollado un proyecto en el cual administra el consumo energético en edificios particulares. Viviendas, bibliotecas, etc. Buscando la eficiencia.</p>
                    </div>
                    <div className='shrink-0'>
                        <img className='h-80 rounded-tr-3xl rounded-bl-3xl' alt='Presentando proyectos realizados' src='../../../../img/presentacion.jpg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home