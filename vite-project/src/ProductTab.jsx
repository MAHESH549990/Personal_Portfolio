import Product from "./Product"
function ProductTab(){
  let students=["Mahesh","Neeraj","Saurav"];
  let students2={a:"Mahesh",b:"Neeraj",c:"Saurav"};
  return(
    <>
       <Product name="Laptop" price={35000} names={students} names2={students2}/>
       <Product name="Phone" price={17000}/>
       <Product name="Mouse" price={499}/>
    </>
  )
}

export default ProductTab;