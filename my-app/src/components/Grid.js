import React, { useState } from 'react';

const numRows = 25;
const numCol = 25;

function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for(let i = 0; i < numRows; i++) {
            rows[i] = Array(numCol - 1).fill(0);
        }
        return rows;
    })
    console.log(grid)
    return (
        <div>
            <h1>This will be a GRID</h1>
        </div>
    )
}

export default Grid
