import React from 'react';
import '../css/ButtonBar.css';

function ButtonBar(props) {

    const startProgram = () => {
        if(!props.running){
            props.setRunning(true)
            props.runningRef.current = true;
            props.runGame()
        }
    }

    const stepping = () => {
        if(!props.running) {
            props.setRunning(true)
            props.runningRef.current = true;
            props.stepThrough()
            props.setRunning(false)
            props.runningRef.current = false
        }
    }

    const stopProgram = () => {
        if(props.running) {
            props.setRunning(false)
            console.log(`Game terminated.`)
        }
    }

    const clearGrid = () => {
        if(!props.running){
            console.log(`Clearing the grid...`)
            props.clearGrid()
        }
    }

    return (
        <div className='bar'>
            <button className='start' onClick={() => {startProgram()}}>
                Start
            </button>
            <button className='step' onClick={() => {stepping()}}>
                Step
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
