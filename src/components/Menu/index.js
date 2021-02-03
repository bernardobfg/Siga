import React from 'react';
import "./styles.css"

function Menu(){
    return(
        <div className="menu">
            <ul className="menu-lista">
                <li>
                    <a>Documentos</a>
                </li>

                <li>
                    <a  className="active">Inscrição em disciplinas</a>
                </li>

                <li>
                    <a>Grades</a>
                </li>

                <li>
                    <a>Dados Pessoais</a>
                </li>

                <li>
                    <a>Pesquisa Avaliativa</a>
                </li>

                <li>
                    <a>Requerimentos</a>
                </li>

                <li>
                    <a>Ajuda</a>
                </li>
            </ul>
        </div>
    )
}


export default Menu