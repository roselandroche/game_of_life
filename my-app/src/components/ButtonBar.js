import React, { useState } from 'react';
import '../css/ButtonBar.css';

function ButtonBar() {
    const [running, setRunning] = useState(false)

    const startProgram = () => {
        if(!running) {
            setRunning(true)
        }
        console.log(running)
    }

    const stopProgram = () => {
        if(running) {
            setRunning(false)
        }
        console.log(running)
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
