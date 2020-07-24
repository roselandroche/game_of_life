import React from 'react';
import '../css/ButtonBar.css';

function ButtonBar() {
    return (
        <div className='bar'>
            <div className='start'>
                Start
            </div>
            <div className='stop'>
                Stop
            </div>
            <div className='clear'>
                Clear
            </div>
        </div>
    )
}

export default ButtonBar
