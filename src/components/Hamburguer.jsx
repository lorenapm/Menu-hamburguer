import React, { useState } from 'react';

const Hamburguer = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="span "></span>
            <span className="span "></span>
            <span className="span "></span>
        </div>
    )
}


export default Hamburguer


