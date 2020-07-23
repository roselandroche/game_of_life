import React from 'react';
import { Link } from 'react-router-dom';

import Grid from './Grid'

function Home() {
    return (
        <div>
            <Link to='/about'>
                <a href='/about'>About</a>
            </Link>
            <h1>Conway's Game of Life!</h1>
            <Grid />
        </div>
    )
}

export default Home
