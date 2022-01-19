import React from 'react'
import GridSquare from './gridSquare';

// Represents a 10 x 18 grid of grid squares
interface Props{ 
    color: string 
} 


export default function GridBoard() {

  // generates an array of 18 rows, each containing 10 GridSquares.
    let grid:any[][] = [[]]
    for (let row = 0; row < 5; row ++) {
        grid.push([])
        for (let col = 0; col < 5; col ++) {
            grid[row].push(<GridSquare></GridSquare>)
        }
    }

  // The components generated in makeGrid are rendered in div.grid-board

    return (
        <div>
            {grid}
        </div>
    )
}