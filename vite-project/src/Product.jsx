import "./Product.css";

function Product({name,price,names=[],names2={}}){
  return(
    <>
       <div className="Product">
          <h2>Product Name: {name}</h2>
          <h2>Product Price: {price}</h2>
          <ul>
            {names.map((n) => <li>{n}</li>)}
          </ul>
          <ul>{names.map((n)=>(<li>{n}</li>))}</ul>
          {price>15000 && <p style={{backgroundColor:"white", color:"black"}}>Discount: 5%</p>}
       </div>
    </>
  )
}

export default Product;