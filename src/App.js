/**
 * Ubisoft Web Developer Website Test
 * Code by Mengyi Yang
 * reference: https://www.npmjs.com/package/react-slideshow-image
 * reference: https://www.npmjs.com/package/react-grid-system
 */
import React from "react"
import Header from "./Header"
import MainPromo from "./mainPromoUnits"
import Intro from "./Intro"
import Footer from "./Footer"

function App(){
    return(
        <div>
            <Header />
            <MainPromo />
           <Intro />
           <hr/>
           <Footer />
        </div>
        
    )
}

export default App