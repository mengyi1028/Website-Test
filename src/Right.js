import React from "react"
import { Container, Row, Col } from 'react-grid-system';
import ContentA from "./ContentA";

function Right(){
    return(
       <div>

            <table>
                <tr>
                    <th>
                        LIFE OF AN ASSASSIN
                    </th>
                </tr>
                <tr>                         
                    <ContentA /> 
                </tr>
                <tr>                         
                    <ContentA /> 
                </tr>
                <tr>                         
                    <ContentA /> 
                </tr>
            </table>
                
        </div> 
    )
}
export default Right