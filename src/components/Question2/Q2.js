import React from 'react'
import { Link } from 'react-router-dom';

export default function Q2() {
    return (
        <div>
            <Link to="/home">Go to Home</Link>
            <p><a href="https://jsonplaceholder.typicode.com/todos">https://jsonplaceholder.typicode.com/todos</a></p>
            <p>Use above <b>API</b>, and display items in below table</p>

            <table>
                <tr>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </table>
        </div>
    )
}
