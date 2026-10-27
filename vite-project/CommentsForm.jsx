import { useState } from "react";
import {useFormik} from "formik";

const validate=(values)=>{
  const errors={};
  if(!values.username){
    errors.username="Username is required";
  }
  return errors;
}

export default function CommentsFrom({addNewComment}){
  const formik=useFormik({
    initialValues:{
      username:'',
      comments:'',
      rating:5,
    },
    validate,
    onSubmit:value=>{
      alert(JSON.stringify(value,null,2));
    },
  });

  // function inputData(event){
  //     let fieldName=event.target.name;
  //     let fieldVal=event.target.value;
      
  //     setFormData((currD)=>{
  //       currD[fieldName]=fieldVal;
  //       return{...currD};
  //     })
  // }

  // function formSubmit(event){
  //   event.preventDefault();
  //   addNewComment(formData);

  //   setFormData({
  //       username:"",
  //       comments:"",
  //       rating:5,
  //   })
  // }
  return(
    <div>
      <h1 style={{textAlign:"center"}}>Comments form</h1>
      <form action="" className="form m-3 p-5" onSubmit={formik.handleSubmit}>
      <label htmlFor="username" className="m-3">Username: </label>
      <input type="text" placeholder="Enter you name" id="username" value={formik.values.username} name="username" onChange={formik.handleChange}/>
      {formik.errors.username ? <p>{formik.errors.username}</p>:null}
      <br/>
      <label htmlFor="comments" className="m-3">Comments: </label>
      <textarea type="text" placeholder="Enter you comments" id="comments" value={formik.values.comments} name="comments" onChange={formik.handleChange}></textarea>
      <br/>
      <label htmlFor="rating" className="m-3">Rating: </label>
      <input type="range" min="1" max="5" id="rating" value={formik.values.rating}name="rating" onChange={formik.handleChange}/>

      <br /><br /><br />
      <button type="submit">Send</button>
      </form>
    </div>
  )
}