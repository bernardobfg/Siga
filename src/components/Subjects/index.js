import React from 'react'
import './styles.css'


function Subjects() {
    return(
        <div  className="subjects">
            <ul>
                <li className="cyan">
                    <p>Introdução à Engenharia de Controle e Automação</p>
                     <small>Ter - 08:00 às 10:00</small>
                </li>

                <li className="pink">
                    <p>Algorítimos e Programação</p>
                     <small>Seg, Qua e Sex - 13:00 às 10:00</small>
                </li>

                <li className="yellow">
                    <p>Química EE</p>
                     <small>Ter, Qui - 13:00 às 17:00</small>
                </li>
            </ul>
        </div>
    )
}

export default Subjects