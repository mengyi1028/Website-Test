import React from "react"
import { Container, Row, Col } from 'react-grid-system';
import Content from "./Content";

function Life(){
    return(
       <div class="left">

            <table>
                <tr>
                    <th>
                        LIFE OF AN ASSASSIN
                    </th>
                </tr>
                <tr>                         
                    <Content /> 
                </tr>
                <tr>                         
                    <Content /> 
                </tr>
                <tr>                         
                    <Content /> 
                </tr>
            </table>
                
        </div> 
    )
}
export default Life