import React from 'react';
import { CuadroInformacionHome } from '../components/CuadroInformacionHome';
function home() {
    return(
        <>
            <div className='grid'>
                <div className='pb-4'>
                    <CuadroInformacionHome nombre='Presentacion'/>
                </div>
                <div>
                    <CuadroInformacionHome nombre='SobreNosotros' clase='flex flex-row-reverse'/>
                </div>
            </div>
        </>
    )
}

export default home