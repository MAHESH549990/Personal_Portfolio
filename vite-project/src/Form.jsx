function handleFromEvent(event){
  event.preventDefault();
  console.log("Form was submitted");
}

function Form(){
  return(
    <>
    <form onSubmit={handleFromEvent}>
      <input type="text" placeholder="enter something...">
      </input>
      <button>Submit</button>
    </form>
    </>
  )
}

export default Form;