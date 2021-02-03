import React from 'react';
import './styles.css'

function Data({name, course, period, nivel, credits}){
    return(
        <div className="data">
            <div className="info">
                <div className="left">
                    <h5>Visualização de Inscrição em Disciplinas</h5>
                    <p>{name}</p>
                    <p>Curso: {course}</p>
                </div>

                <div className="right">
                    <p>{period} período</p>
                    <p>Nível: {nivel}</p>
                </div>
            </div>
            <div className="credits">
                <p>Créditos: {credits}</p>
            </div>
            
        </div>
    )
}

export default Data