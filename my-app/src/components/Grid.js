import React, { useState, useCallback, useRef } from 'react';
import '../css/Grid.css';
import produce from 'immer';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';

const numRows = 25;
const numCol = 25;
const neighborCells = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1]
]

function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for(let i = 0; i < numRows; i++) {
            rows[i] = Array(numCol).fill(0);
        }
        return rows;
    })
    const [running, setRunning] = useState(false);
    const [cellColor] = useState('#FFFFFF');

    const runningRef = useRef(running);
    runningRef.current = running;

    const [genNumber, setGenNumber] = useState(0);

    const updateGen = () => {
        setGenNumber((genNumber) => genNumber + 1)
    }

    const runGame = useCallback(() => {
        if(!runningRef.current) {
            return
        }
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 0; i < numRows; i++) {
                    for(let j = 0; j < numCol; j++) {
                        let neighbors = 0;
                        neighborCells.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if(newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCol) {
                                neighbors += currentGrid[newI][newJ]
                            }
                        })
                        if(!currentGrid[i][j] && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        } else if(currentGrid[i][j] && neighbors >= 2 && neighbors <= 3) {
                            gridCopy[i][j] = 1;
                        } else {
                            gridCopy[i][j] = 0;
                        }
                    }
                }
            })
        })
        updateGen();
        setTimeout(runGame, 1000)
    }, [])

    const randomGrid = () => {
        if(runningRef.current) {
            return
        }
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 0; i < numRows; i++) {
                    for(let j = 0; j < numCol; j++) {
                        gridCopy[i][j] = Math.round(Math.random());
                    }
                }
            })
        })
        setGenNumber(0);
    }

    const clearGrid = () => {
        if(runningRef.current) {
            return
        }
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 0; i < numRows; i++) {
                    for(let j = 0; j < numCol; j++) {
                        gridCopy[i][j] = 0;
                    }
                }
            })
        })
        setGenNumber(0);
    }

    const stepThrough = useCallback(() => {
        if(!runningRef.current) {
            return
        }
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 0; i < numRows; i++) {
                    for(let j = 0; j < numCol; j++) {
                        let neighbors = 0;
                        neighborCells.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if(newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCol) {
                                neighbors += currentGrid[newI][newJ]
                            }
                        })
                        if(!currentGrid[i][j] && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        } else if(currentGrid[i][j] && neighbors >= 2 && neighbors <= 3) {
                            gridCopy[i][j] = 1;
                        } else {
                            gridCopy[i][j] = 0;
                        }
                    }
                }
            })
        })
        updateGen();
    }, [])

    const toad = () => {
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 10; i < 13; i++) {
                    gridCopy[i][10] = 1;
                }
                for(let j = 11; j < 12; j++) {
                    for(let k = 11; k < 14; k++) {
                        gridCopy[k][j] = 1;
                    }
                }
            })
        })
    }

    const glider = () => {
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 10; i < 13; i++) {
                    gridCopy[i][10] = 1;
                }
                gridCopy[12][11] = 1;
                gridCopy[11][12] = 1;
            })
        })
    }

    const penta = () => {
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                for(let i = 7; i < 9; i++) {
                    gridCopy[10][i] = 1;
                }
                for(let i = 10; i < 14; i++) {
                    gridCopy[10][i] = 1;
                }
                for(let i = 15; i < 17; i++) {
                    gridCopy[10][i] = 1;
                }
                gridCopy[11][9] = 1;
                gridCopy[9][9] = 1;
                gridCopy[11][14] = 1;
                gridCopy[9][14] = 1;
            })
        })
    }

    return (
        <div className='main-body'>
            <ButtonLeft 
                running = { running } 
                setRunning = { setRunning } 
                runGame = { runGame } 
                runningRef = { runningRef }
                clearGrid = { clearGrid }
                stepThrough = { stepThrough }
                randomGrid = { randomGrid }
            />
            <div 
                className='grid-container'
                style={{
                    gridTemplateColumns: `repeat(${numCol}, auto)`,
                }}
            >
                {!running ? grid.map((rows, i) => 
                    rows.map((col, j) => 
                        <div 
                            className='cell' 
                            key={`${i}-${j}`}
                            style={{backgroundColor: grid[i][j] ? cellColor : "#2C0A28"}}
                            onClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                                })
                                setGrid(newGrid)
                            }}
                        />
                    )) : grid.map((rows, i) => 
                        rows.map((col, j) => 
                            <div 
                                className='cell' 
                                key={`${i}-${j}`}
                                style={{backgroundColor: grid[i][j] ? cellColor : "#2C0A28"}}
                            />
                        )
                    )
                }
            </div>
            <div className='right-panel'>
                <p className='gen'>
                    Generation<br/>
                    { genNumber }
                </p>
                <ButtonRight 
                    toad={ toad } 
                    glider={ glider } 
                    penta={ penta } 
                />
            </div>
        </div >
    )
}

export default Grid
