import React from 'react';

const circle="/images/circle.png";
const cross="/images/cross.png";
const check=(changing,constant,board,symbol,direction)=>{
    let t1=changing-1,t2=changing+1,t3=constant-1,t4=constant+1;
    while(t1>=0)
    {
        if(direction==="lcross")
        {
            if(board[t1][t3]==='' || !(board[t1][t3]===symbol))
            return false;
            t3--;
        }
        else if(direction==="rcross")
        {
            if(board[t1][t3]==='' || !(board[t1][t3]===symbol))
            return false;
            t3++;
        }
        else if(direction==="updown"){
            if(board[t1][constant]==='' || !(board[t1][constant]===symbol))
            return false;
        }
        else{
            if(board[constant][t1]==='' || !(board[constant][t1]===symbol))
            return false;
    
        }
        
        t1--;
    }
    while(t2<board.length){
        if(direction==="lcross")
        {
            if(board[t2][t4]==='' || !(board[t2][t4]===symbol))
            return false;
            t4++;
        }
        else if(direction==="rcross")
        {
            if(board[t2][t4]==='' || !(board[t2][t4]===symbol))
            return false;
            t4--;
        }
        else if(direction==="updown"){
            if(board[t2][constant]==='' || !(board[t2][constant]===symbol))
            return false;
        
        }
        else{
            if(board[constant][t2]==='' || !(board[constant][t2]===symbol))
            return false;
        }
        t2++;
    }
    
   return true;
}

const CheckForWinner = (board,index,symbol) => {
    const r=parseInt(index.substring(0,1))
    const c=parseInt(index.substring(1,2))
    console.log(board)
    //upward and downward check
    if(check(r,c,board,symbol,"updown"))
    return true;
    
    //left and right check
    if(check(c,r,board,symbol,"leftright"))
    return true;

    //left cross
    if(check(r,c,board,symbol,"lcross"))
    return true;

    //right cross
    if(check(r,c,board,symbol,"rcross"))
    return true;
    
    return false;
};

export default CheckForWinner;