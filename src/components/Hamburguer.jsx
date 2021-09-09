import React, { useState } from 'react';
import Menu from "./Menu";
import "../styles/Hamburguer.scss";

const Hamburguer = () => {
    
    const [menuOpen, setMenuOpen] = useState(false); 
    const onClick = () => {setMenuOpen(!menuOpen)};

    return (
        <>
        <div className="hamburguer" onClick={onClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
        <div>
        {menuOpen ? (
                <Menu/>
            ) : (true)
            }
        </div>
        </>
    )
};


export default Hamburguer


