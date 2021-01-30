import React from 'react'

export default function B() {
    let bstyle = {
        height: '300px',
        width: '300px',
        backgroundColor: "white",
        border: "2px solid black"
    }
    return (
        <div style={bstyle}>
            <h2>Component B</h2>
            <input type="text"/>
            <br/>
            <button>Show</button>
        
        </div>
    )
}
