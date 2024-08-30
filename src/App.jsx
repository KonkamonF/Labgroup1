import { useState } from "react"
import {toppings} from "./data"
import SelectTopping from "./Selecttopping"


console.log(toppings)
export default function App() {
  const [cart,setCart] = useState([])
  const [count,setCount] = useState(0)
  const [checkOut,setCheckOut] = useState([])

  const addPrice = ([price,index],e) => {
    if (e.target.checked){
      setCount(prv => prv+price)
      setCart(prv => [...prv,index])
    }else{
      setCount(prv => prv-price)
      let newCart = [...cart]
      newCart.splice(newCart.indexOf(index),1)
      setCart(newCart)
    }
    console.log(cart)
  }

  return (
    <div>
      <div>
        <div className='flex flex-col p-4 m-auto w-80 border rounded-lg shadow-lg'>
        <h1 className="font-bold text-2xl text-fuchsia-700">Select Topping</h1>
        <br/>
        <form>
          {toppings.map((e,index) => <SelectTopping 
          index = {index}
          name = {e.name} 
          price = {e.price} 
          addPrice = {addPrice}
          />)}
        </form>
        <button className="border bg-fuchsia-600 text-red-50 font-bold rounded-md shadow-md mt-1  hover:bg-blue-400"  onClick={() => {setCheckOut([...cart])}}>Check out</button>
        
      <div>
      {checkOut.map(el => 
      <div className="flex justify-between  bg-blue-100">
      <p>{toppings[el].name}</p>
      <p>฿{toppings[el].price.toFixed(2)}</p>
      </div>
    )}
      </div>
        <h2 className="flex justify-between bg-purple-200 font-semibold text-lg p-1">
          <div>Total</div>
          <div>฿{count.toFixed(2)}</div>
        </h2>
        </div>
      </div>
      
    </div>
  )
}
