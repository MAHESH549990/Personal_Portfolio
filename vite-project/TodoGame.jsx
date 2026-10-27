import { useState } from "react"

export default function TodoGame(){
  let [task,addTask]=useState(["New task1"]);

  let [newVal,addNewVal]=useState("");
  
  function addInputTask(){
    addNewVal(newVal);
    console.log(newVal);
  }
  return(
    <>
        <div className="container mt-4">
          <h1>Todo List</h1>
          <input type="test" placeholder="enter your tasks" value={newVal} onChange={true}>
          </input>
          <button onClick={addInputTask}>Add Task</button>
        </div>

        <div className="container mt-5">
          <h4>Your Tasks</h4>
          <ul>
            {
              task.map((t)=>{
                return <li>
                   {t}
                 </li>
              })
            }
          </ul>
        </div>
    </>
  )
}