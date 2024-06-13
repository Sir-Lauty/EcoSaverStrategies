import React from 'react';
import './preguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
    return(
        <>
            <div className='preguntasFrecuentesDiv'>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadOne'></input>
                        <label htmlFor='preguntaCollapsibleHeadOne' className='preguntaCollapsibleHeadOne'>¿Cómo crearon el sitio?</label>
                        <div className='preguntaRespuesta'>
                            <p>Las tazas sobre el mantel, la lluvia derramada. Un poco de miel, un poco de miel, no basta...</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadTwo'></input>
                        <label htmlFor='preguntaCollapsibleHeadTwo' className='preguntaCollapsibleHeadTwo'>¿Los productos son eco-amigables?</label>
                        <div className='preguntaRespuesta'>
                            <p>Buena suerte y más que suerte, sin alarma. Me voy corriendo a ver qué escribe en mi pared la tribu de tu calle, la banda de mi calle.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadThree'></input>
                        <label htmlFor='preguntaCollapsibleHeadThree' className='preguntaCollapsibleHeadThree'>¿Cuál es el objetivo?</label>
                        <div className='preguntaRespuesta'>
                            <p>Vos poné la gasolina que yo prendo el motor ¿Podrás cruzar el puente sin caer? Al llegar la medianoche, aunque tenga un ala rota, voy a hacer mi tiro sin fallar.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadFour'></input>
                        <label htmlFor='preguntaCollapsibleHeadFour' className='preguntaCollapsibleHeadFour'>¿Bover o Rica?</label>
                        <div className='preguntaRespuesta'>
                            <p>Ángel de la soledad y de la desolación, preso de tu ilusión vas a bailar a bailar, bailar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreguntasFrecuentes;