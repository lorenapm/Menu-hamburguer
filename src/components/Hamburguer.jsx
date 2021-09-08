import React, { useState } from 'react';
import "../styles/Hamburguer.css";

const Hamburguer = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
    )
}


export default Hamburguer


