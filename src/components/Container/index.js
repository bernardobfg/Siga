import React from 'react';
import "./styles.css";
import Title from "../Title/index";
import Data from "../Data/index";
import Subjects from "../Subjects/index";
import Table from "../Table/index"
import Table2 from "../Table2/index"

//O uso do Table2 se deu, pois ao utilizar as tag <table> <tr> e <td> para criar a tabela, ocorria um erro de formatação 
//sem muita lógica, portanto decidi estilizar td com divs

function Container(){
    return(
        <div className="container">
            <Title/>
            <Data name="Rosana Borges" course="Engenharia de Controle e Automação" period="1" nivel="Graduação" credits="11"/>
            <div className="table_subjects">
                <Table2/>
                <Subjects/>
            </div>
            
        </div>
    )
}

export default Container