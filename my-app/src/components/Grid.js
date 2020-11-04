import React, { useState, useCallback, useRef } from 'react';
import '../css/Grid.css';
import produce from 'immer';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';

const numRows = 25;
const numCol = 40;
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
        if(!runningRef.current) {
            return
        }
        setGenNumber((genNumber) => genNumber + 1);
        setTimeout(updateGen, 1000);
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
        clearGrid()
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
        clearGrid()
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
        clearGrid()
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

    const gosper = () => {
        clearGrid()
        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                gridCopy[1][24] = 1;
                gridCopy[1][25] = 1;
                gridCopy[2][24] = 1;
                gridCopy[2][26] = 1;
                gridCopy[3][25] = 1;
                gridCopy[3][26] = 1;
                gridCopy[3][27] = 1;
                gridCopy[3][12] = 1;
                gridCopy[4][9] = 1;
                gridCopy[4][10] = 1;
                gridCopy[4][11] = 1;
                gridCopy[4][12] = 1;
                gridCopy[4][16] = 1;
                gridCopy[4][17] = 1;
                gridCopy[4][26] = 1;
                gridCopy[4][27] = 1;
                gridCopy[4][28] = 1;
                gridCopy[4][35] = 1;
                gridCopy[4][36] = 1;
                gridCopy[5][8] = 1;
                gridCopy[5][9] = 1;
                gridCopy[5][10] = 1;
                gridCopy[5][11] = 1;
                gridCopy[5][15] = 1;
                gridCopy[5][16] = 1;
                gridCopy[5][25] = 1;
                gridCopy[5][26] = 1;
                gridCopy[5][27] = 1;
                gridCopy[5][35] = 1;
                gridCopy[5][36] = 1;
                gridCopy[6][1] = 1;
                gridCopy[6][2] = 1;
                gridCopy[6][8] = 1;
                gridCopy[6][11] = 1;
                gridCopy[6][15] = 1;
                gridCopy[6][16] = 1;
                gridCopy[6][18] = 1;
                gridCopy[6][20] = 1;
                gridCopy[6][21] = 1;
                gridCopy[6][24] = 1;
                gridCopy[6][26] = 1;
                gridCopy[7][1] = 1;
                gridCopy[7][2] = 1;
                gridCopy[7][8] = 1;
                gridCopy[7][9] = 1;
                gridCopy[7][10] = 1;
                gridCopy[7][11] = 1;
                gridCopy[7][16] = 1;
                gridCopy[7][18] = 1;
                gridCopy[7][20] = 1;
                gridCopy[7][21] = 1;
                gridCopy[7][24] = 1;
                gridCopy[7][25] = 1;
                gridCopy[8][9] = 1;
                gridCopy[8][10] = 1;
                gridCopy[8][11] = 1;
                gridCopy[8][12] = 1;
                gridCopy[8][16] = 1;
                gridCopy[8][18] = 1;
                gridCopy[8][19] = 1;
                gridCopy[9][12] = 1;
            })
        })
    }

    return (
        <div className='main-body'>
            <ButtonLeft 
                running = { running } 
                setRunning = { setRunning } 
                runGame = { runGame } 
                updateGen = { updateGen }
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
                    gosper = { gosper }
                />
            </div>
        </div >
    )
}

export default Grid
