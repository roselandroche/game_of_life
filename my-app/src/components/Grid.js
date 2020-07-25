import React, { useState, useCallback } from 'react';
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
    const [running, setRunning] = useState(false)

    /*
        determine what current cell is
        determine how many neighbors are living
        if current cell is dead (equal to 0) AND has exactly 3 living neighbors:
            it comes to life (is reset to 1)
        if current cell is alive (equal to 1) AND has 2 OR 3 living neighbors:
            it stays alive (equal to 1)
        else:
            it dies/stays dead (equal to 0)
        */

    const runGame = useCallback(() => {
        
    }, [])

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
            <ButtonBar running = { running } setRunning = { setRunning } runGame = { runGame } />
        </>
    )
}

export default Grid
