import favicon from "../public/favicon.svg";
function About(){
  return(
    <>
      <div>
        <img src={favicon} alt="React default image"></img>
        <h4>
          Mahesh Bhatt
          <hr />
          <br/>
          BCA(AI&DS)
        </h4>
        
      </div>
    </>
  )
}

function Hobby(){
  return(
    <>
     <h5>Hobby: Building website and listining to songs</h5>
    </>
  )
}

export {About,Hobby}