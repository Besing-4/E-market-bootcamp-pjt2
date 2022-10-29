import { useState } from 'react';
import './App.css';
import ProductCard from "./productCard"

function App() {
const [products, setProducts] = useState([
  {
    id:1,
    name: "product1",
    price:500,
    image:"./Images/brown.jpg"
  },
  {
    id:2,
    name: "product2",
    price:500,
    image:"./Images/Fila.jpg"
  },
  {
    id:3,
    name: "product3",
    price:500,
    image:"./Images/revolt.jpg"
  }
])


let [cartItemscount,setcartItemscount] = useState(0);
const [cartItems, setCartItems]= useState ([]);

const addTocart=(product)=>{
  let newCartItems =[product, ...cartItems]
  cartItems.push(product);
  setcartItemscount=(cartItems.length);
  console.log(cartItems);
};

const productContent = products.map((product) => {
  return(
    <ProductCard product={product} addTocart= {addTocart}/>
);
});

 const cartContent = cartItems.map((cart)=>{
  return(<ProductCard product={cart}/>
 );
 })
  
 

  return (
    <div className="App row">
        <div className='col-12'>
          <ul>
            <li className='active'>product</li>
            <li>cart</li>
          </ul>
          <button className='card'>
            cart Items {cartItemscount}
          </button>
          
        </div>
        {productContent}
        <div className='row' style={{marginTop:'4rem'}}>
          <h2> card Items</h2>
        </div>
      </div>
  )
}

export default App;
