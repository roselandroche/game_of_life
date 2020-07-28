import React from 'react'
import { Link } from 'react-router-dom'

import '../css/About.css';

function About() {
    return (
        <div className='about'>
            <div className='about-header'>
                <h1>About</h1>

                <Link to='/'>
                    <a href='/' className='home-link'>Home</a>
                </Link>
            </div>

            <h3>What is Conway's Game of Life?</h3>
            <p>It is a cellular automaton developed by John Conway in 1970. It is a 0 player game - meaning that aside from the 
                initial configuration no user input is required. The state changes and evolves on its own.
                It is composed of a grid of cells that follow rules from which complex behaviors can emerge.</p>
            
            <h3>Why is this useful?</h3>
            <p>This can be used in simulations for biological or chemical or other scenarios, to assist in research.</p>
            
            <h3>How is Turing Completeness related?</h3>
            <p>For a computing system to be Turing Complete, it should be capable of performing arbitrary, general purpose computation.
                Conway's Game of Life qualifies under this definition.</p>
            
            <h3>What are the rules?</h3>
            <p>For a cell to 'live':</p>
            <p>If the current cell is dead, but 3 neighboring cells are alive, it comes to life.</p>
            <p>For a cell to 'die':</p>
            <p>If the current cell is alive, it needs 2 to 3 living neighboring cells to survive, or else it dies.</p>
        </div>
    )
}

export default About