import React from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {

    const navLinks = {
        display: "flex",
        justifyContent: "space-around"
    }

    return (
        <div>
            <h1>Home</h1>
            <div style={navLinks}>
                <Link to="/question1"><span>Question 1</span></Link>
                <span>|</span>
                <Link to="/question2"><span>Question 2</span></Link>
                {/* <span>|</span>
                <Link to="/question3"><span>Question 3</span></Link>
                <span>|</span>
                <Link to="/question4"><span>Question 4</span></Link>
                <span>|</span>
                <Link to="/question5"><span>Question 5</span></Link>
                <span>|</span>
                <Link to="/question6"><span>Question 6</span></Link>
                <span>|</span>
                <Link to="/question7"><span>Question 7</span></Link> */}
            </div>
        </div>
    )
}

export default Home;
