import React from 'react'
import './styles.css'
import Subject from"../Subject/index"

function Subjects() {
    return(
        <div  className="subjects">
            <ul className="subjects-list">
                <Subject subject="Introdução à Engenharia de Controle e Automação" schedule="Ter - 08:00 às 10:00" color="cyan"/>
                <Subject subject="Algorítimos e Programação" schedule="Seg, Qua e Sex - 13:00 às 10:00" color="pink"/>
                <Subject subject="Química EE" schedule="Ter, Qui - 13:00 às 17:00" color="yellow"/>
            </ul>
        </div>
    )
}

export default Subjects