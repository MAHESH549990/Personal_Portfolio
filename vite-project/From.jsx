import { useState } from "react";

export default function Form(){
  let [data,fromData]=useState({
    username:"",
    password:"",
  });

  let handleForm=(event)=>{
     let handleEvent=event.target.name;
     let newVal=event.target.value;

     fromData((currData)=>{
         currData[handleEvent]=newVal;
         return {...currData};
     })
  }
  function handleFormData(event){
    event.preventDefault();
    console.log(data);
    fromData({
        username:"",
        password:"",
    });
  }
  
  return(
      <form onSubmit={handleFormData}>
          <label htmlFor="username">Enter your name</label>
          <input type="text" placeholder="enter your name" value={data.username}
          onChange={handleForm} id="username" name="username"/>
          <br /><br /><br />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleForm}/>
          <br /><br />
          <hr/>
          <button type="submit">Submit</button>
      </form>
  )
}