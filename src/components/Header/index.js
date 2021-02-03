import React from 'react';
import "./styles.css"
import Menu from '../Menu/index';
import HeaderSup from '../HeaderSup/index'

function Header(){
    return(

        <> 
            <div className="header-superior">
                <HeaderSup name="Rosana Borges" ocupation="Aluna"/>
            </div>
            <div className="header">
                <Menu/>
            </div>
        </>
    )
}

export default Header