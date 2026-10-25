import { useState } from "react";

function init(){
  console.log("Init was called");
  return Math.random();
}
export default function LinkeButton(){
    let [moves,setmoves]=useState({red:0,green:0,blue:0,yellow:0});
    function countClicks(){
       console.log(`Moves value ${moves.red}`);
       setmoves((premoves)=>{
        return {...premoves,red:premoves.red+=1}
       })
    }

     function countCLicks_r(){
       console.log(`Moves value ${moves.blue}`);
       setmoves((premoves)=>{
        return {...premoves,blue:premoves.blue+=1}
       })
    }
     function countCLicks_g(){
       console.log(`Moves value ${moves.green}`);
       setmoves((premoves)=>{
        return {...premoves,green:premoves.green+=1}
       })
    }

     function countCLicks_y(){
       console.log(`Moves value ${moves.yellow}`);
       setmoves((premoves)=>{
        return {...premoves,yellow:premoves.yellow+=1}
       })
    }
    
    return(
    <>
      <p>Red count: {moves.red}</p>
      <button onClick={countClicks} style={{backgroundColor:"red"}}>+1</button>

      <p>Blue count: {moves.blue}</p>
      <button onClick={countCLicks_r} style={{backgroundColor:"blue"}}>+1</button>

      <p>Green count: {moves.green}</p>
      <button onClick={countCLicks_g} style={{backgroundColor:"green"}}>+1</button>

      <p>Yellow count: {moves.yellow}</p>
      <button onClick={countCLicks_y} style={{backgroundColor:"yellow"}}>+1</button>
    </>
    )
}