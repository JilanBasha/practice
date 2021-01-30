import React from 'react';
import { Link } from 'react-router-dom';
import B from './B';
import C from './C';

export default function A() {
    let astyle = {
        height: '70vh',
        width: '90vw',
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
    return (
        <>
            <Link to="/home">Go to Home</Link>
            <br/>
            <div style={{border:"solid 2px black"}}>
                <h2>Component A</h2>
                <div style={astyle}>
                    <B/><C/>
                </div>
            </div>
        </>
    )
}
