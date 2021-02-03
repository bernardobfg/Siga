import React from 'react';
import "./styles.css"
import Hamburger from "../../assets/square.png"

function Menu(){
    return(
        <>
        <div className="menu">
        <ul className="menu-lista" id="menu-lista">
                <li>
                    <a>Documentos</a>
                </li>

                <li>
                    <a>Inscrição em disciplinas</a>
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

            <button className="abrir" onClick="abrir()"><img src={Hamburger}/></button>
        </div>
       
        </>
    )
}


export default Menu