import React from 'react';
import "./styles.css";

function Table2() {
    return(
        <div className="div-table">
        <div className="time">
            <p>08:00</p>
            <p>10:00</p>
            <p>12:00</p>
            <p>13:00</p>
            <p>15:00</p>
            <p>17:00</p>
        </div>


        <div className="tabela">
            <div className="line">
                <div className="table-head">Seg</div>
                <div className="table-head">Ter</div>
                <div className="table-head">Qua</div>
                <div className="table-head">Qui</div>
                <div className="table-head">Sex</div>   
            </div>



            <div className="line">
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>              

            </div>

            <div className="line">
                <div className="table-data"><p></p></div>
                <div className="table-data cyan"><p>Intro ECA</p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>              

            </div>


            <div className="line">
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>              

            </div>


            <div className="line">
                <div className="table-data pink"><p>ALG PROG</p></div>
                <div className="table-data yellow"><p>Quimica EE</p></div>
                <div className="table-data pink"><p>ALG PROG</p></div>
                <div className="table-data yellow"><p>Quimica EE</p></div>
                <div className="table-data pink"><p>ALG PROG</p></div>              

            </div>

            <div className="line">
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>
                <div className="table-data"><p></p></div>              

            </div>
        </div>
        </div>
    )
}

export default Table2;