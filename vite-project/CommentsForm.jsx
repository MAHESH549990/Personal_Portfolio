import { useState } from "react"

export default function CommentsFrom({addNewComment}){
  let [formData,setFormData]=useState({
    username:"",
    comments:"",
    rating:5,
  });

  function inputData(event){
      let fieldName=event.target.name;
      let fieldVal=event.target.value;
      
      setFormData((currD)=>{
        currD[fieldName]=fieldVal;
        return{...currD};
      })
  }

  function formSubmit(event){
    event.preventDefault();
    addNewComment(formData);

    setFormData({
        username:"",
        comments:"",
        rating:5,
    })
  }
  return(
    <div>
      <h1 style={{textAlign:"center"}}>Comments form</h1>
      <form action="" className="form m-3 p-5" onSubmit={formSubmit}>
      <label htmlFor="username" className="m-3">Username: </label>
      <input type="text" placeholder="Enter you name" id="username" value={formData.username} name="username" onChange={inputData}/>
      <br/>
      <label htmlFor="comments" className="m-3">Comments: </label>
      <textarea type="text" placeholder="Enter you comments" id="comments" value={formData.comments} name="comments" onChange={inputData}></textarea>
      <br/>
      <label htmlFor="rating" className="m-3">Rating: </label>
      <input type="range" min="1" max="5" id="rating" value={formData.rating} name="rating" onChange={inputData}/>

      <br /><br /><br />
      <button type="submit">Send</button>
      </form>
    </div>
  )
}