import "./Event.css";
import Form from "./Form.jsx";
import {useState} from "react";

export default function Event(){
  let [count,setCount]=useState(0);
  let increaseCount=()=>{
   setCount(count+1);
   console.log(count);
  }
  return(
    <>
      <div>
          <button onClick={increaseCount}>Count: {count}</button>
      </div>
    </>
  )
}
