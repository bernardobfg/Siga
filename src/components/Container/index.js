import React from 'react';
import "./styles.css";
import Title from "../Title/index";
import Data from "../Data/index";
import Subjects from "../Subjects/index";
import Table from "../Table/index"



function Container(){
    return(
        <div className="container">
            <Title/>
            <Data name="Rosana Borges" course="Engenharia de Controle e Automação" period="1" nivel="Graduação" credits="11"/>
            <div className="table_subjects">
                <Table/>
                <Subjects/>
            </div>
            
        </div>
    )
}

export default Container