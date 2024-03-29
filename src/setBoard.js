import React from 'react'
import Tile from './components/Tile'


const setBoard = (size) => {
     let board=[]

     for(let i=0;i<size;++i)
     {
        let temparray=[]
        for(let j=0;j<size;++j)
        {
           temparray.push("")
        }
        board.push(temparray)
     }
     
     return board
}

export default setBoard