import React from 'react';
import '../css/ButtonBar.css';

function ButtonLeft(props) {

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

    const randomize = () => {
        if(!props.running) {
            console.log(`Creating random configuration...`)
            props.randomGrid()
        }
    }
    
    return (
        <div className='bar'>
            <button className='start' onClick={() => {startProgram(); props.updateGen()}}>
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
            <button className='random' onClick={() => {randomize()}}>
                Random
            </button>
        </div>
    )
}

export default ButtonLeft
