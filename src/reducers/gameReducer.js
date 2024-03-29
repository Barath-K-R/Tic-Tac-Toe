export const gameReducer=(state={
    noOfTurns:1,
    size:3,
    board:[],
    winner:""
    
},action)=>{
    switch (action.type) {
        case "INCREAMENT":
            return {
                  ...state,noOfTurns:state.noOfTurns+1
            }
            break;
        case "SET_SIZE":
            return {
                ...state,size:action.size
            }
        case 'SET_BOARD':
        return {
            ...state,board:action.board
        }
        case 'SET_WINNER':
            return{
                ...state,winner:action.winner
            }
        default:
            break;
    }

}