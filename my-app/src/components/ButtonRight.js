import React from 'react';
import '../css/ButtonBar.css';

function ButtonRight(props) {
    const setGlider = () => {
        if(props.running) {
            return
        }
        props.glider()
    }
    const setToad = () => {
        if(props.running) {
            return
        }
        props.toad()
    }
    const setPent = () => {
        if(props.running) {
            return
        }
        props.penta()
    }
    const setGosper = () => {
        if(props.running) {
            return
        }
        props.gosper()
    }

    return (
        <div className='preset-buttons'>
            <button className='toad' onClick={() => {setToad()}}>
                Toad
            </button>
            <button className='glider' onClick={() => {setGlider()}}>
                Glider
            </button>
            <button onClick={() => {setGosper()}}>
                Gosper Glider
            </button>
            <button className='pentadecathlon' onClick={() => {setPent()}}>
                Pentadecathlon
            </button>
        </div>
    )
}

export default ButtonRight
