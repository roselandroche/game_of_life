import React, { useState } from 'react';
import '../css/Grid.css';
import produce from 'immer';
import ButtonBar from './ButtonBar';

const numRows = 25;
const numCol = 25;

function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for(let i = 0; i < numRows; i++) {
            rows[i] = Array(numCol).fill(0);
        }
        return rows;
    })
    return (
        <>
            <div 
                className='grid-container'
                style={{
                    gridTemplateColumns: `repeat(${numCol}, auto)`,
                }}
            >
                {grid.map((rows, i) => 
                    rows.map((col, j) => 
                        <div 
                            className='cell' 
                            key={`${i}-${j}`}
                            style={{backgroundColor: grid[i][j] ? "white": "#2C0A28"}}
                            onClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                                })
                                setGrid(newGrid)
                            }}
                        />
                    ))}
            </div>
            <ButtonBar />
        </>
    )
}

export default Grid
