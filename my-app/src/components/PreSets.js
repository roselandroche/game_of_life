import React from 'react'

function PreSets(props) {
    const setGlider = () => {
        if(props.running) {
            return
        }

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

    }

    return (
        <div>
            <button className='glider'>
                Glider
            </button>
            <button className='toad' onClick={() => {setToad()}}>
                Toad
            </button>
            <button className='pentadecathlon'>
                Pentadecathlon
            </button>
        </div>
    )
}

export default PreSets
