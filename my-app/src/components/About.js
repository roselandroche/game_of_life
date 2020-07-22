import React from 'react'

function About() {
    return (
        <div>
            <h1>About</h1>

            <h3>What is it?</h3>
            <p>It is a cellular automaton developed by John Conway in 1970. It is a 0 player game - aside from the 
                initial configuration no user input is required. The state changes and evolves on its own.
                It is composed of a grid of cells that follow rules from which complex behaviors can emerge.</p>
            
            <h3>Why is it useful?</h3>
            <p>This can be used in simulations for biological or chemical or other scenarios, to assist in research.</p>
            
            <h3>How is Turing Completeness related?</h3>
            <p>A computing system is Turing Complete if it is capable of performing arbitrary, general purpose computation.
                Conway's Game of Life is a computing system that qualifies.</p>
            
            <h3>What are the rules?</h3>
            <p>To Live:</p>
            <p>If the current cell is dead, but 3 neighboring cells are alive, it comes to life.</p>
            <p>To Die:</p>
            <p>If the current cell is alive, it needs 2 to 3 living neighboring cells to survive, else it dies.</p>
        </div>
    )
}

export default About