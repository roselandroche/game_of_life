import React from 'react';
import '../css/ButtonBar.css';

function ButtonBar(props) {

    const startProgram = () => {
        props.setRunning(true)
        props.runningRef.current = true;
        props.runGame()
    }

    const stopProgram = () => {
        props.setRunning(false)
        console.log(`Game terminated.`)
    }

    const clearGrid = () => {
        console.log(`Clearing the grid...`)
    }

    return (
        <div className='bar'>
            <button className='start' onClick={() => {startProgram()}}>
                Start
            </button>
            <button className='stop' onClick={() => {stopProgram()}}>
                Stop
            </button>
            <button className='clear' onClick={() => {clearGrid()}}>
                Clear
            </button>
        </div>
    )
}

export default ButtonBar
