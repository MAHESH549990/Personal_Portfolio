import favicon from "./assets/hero.png";
 let name="Mahesh Bhatt";
function About(){
  return(
    <>  
       <div>
             <img src={favicon} className="image" alt="React default image"></img>
       </div>
      <h4>Name: {name}</h4>
      <p>2*2: {2*2}</p>
    
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