import { useState } from "react";
import CommentsFrom from "./CommentsForm";

export default function ShowComments(){
  let [comments,setComments]=useState([{
    username:"Mahesh",
    comments:"Not good product",
    rating:5
  }]);

  let addNewComments=(comment)=>{
      setComments((currComments)=>[...currComments,comment]);
  }

  return(
    <>
      <div className="text-center">
         <h1>Comments</h1>
         {comments.map((comment,idx)=>(
         <div className="rounded-4 border p-3" key={idx}>
            <p>
              @Username: {comment.username}<br/>
              Rating: {comment.rating}<br/>
              Comments: {comment.comments}
            </p>
         </div>
         ))}
         <hr className="hr"></hr>
      </div>
       <CommentsFrom addNewComment={addNewComments}/>
  </>
      
  )
}