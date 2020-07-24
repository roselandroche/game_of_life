import React from 'react';
import { Link } from 'react-router-dom';

import Grid from './Grid'
import '../css/Home.css'

function Home() {
    return (
        <div>
            <Link to='/about'>
                <a href='/about' className='about-link'>About</a>
            </Link>
            <h1>Conway's Game of Life!</h1>
            <Grid />
        </div>
    )
}

export default Home
