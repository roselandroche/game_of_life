import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css'

function Home() {
    return (
        <div className='header'>
            <h1>Conway's Game of Life!</h1>
            <Link to='/about'>
                <a href='/about' className='about-link'>About</a>
            </Link>
        </div>
    )
}

export default Home
