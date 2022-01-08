import React from 'react';

function Header() {
    const styling = {
        backgroundColor:'Black', 
        color:'White',
        textAlign: 'center',
        padding: 10,
        minHeight: 20,
        fontSize: 20
    };
    return (
        <div style = {styling}>
            <p>Meme Generator</p>
        </div>
    )
}

export default Header;