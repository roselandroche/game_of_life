import React from 'react'

function PreSets(props) {
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

    return (
        <div>
            <button className='glider' onClick={() => {setGlider()}}>
                Glider
            </button>
            <button className='toad' onClick={() => {setToad()}}>
                Toad
            </button>
            <button className='pentadecathlon' onClick={() => {setPent()}}>
                Pentadecathlon
            </button>
        </div>
    )
}

export default PreSets
