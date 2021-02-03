import React from 'react'
import './styles.css'

function Table(){
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
            <table>
                <tr>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td className="cyan"><p></p>Intro ECA</td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                </tr>

                <tr>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                </tr>
                <tr>
                    <td className="pink"><p>ALG PROD</p></td>
                    <td className="yellow"><p>Quimica EE</p></td>
                    <td className="pink"><p>ALG PROD</p></td>
                    <td className="yellow"><p>Quimica EE</p></td>
                    <td className="pink"><p>ALG PROD</p></td>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                    <td><p></p></td>
                </tr>

            </table>



        </div>
    )
}


export default Table;