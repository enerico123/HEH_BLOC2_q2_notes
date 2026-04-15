import { useState,useReducer } from 'react'
import {cartReducer,initialState} from './Reducer/cartReducer'
import './App.css'

function App() {
  const [state,dispatch] = useReducer(cartReducer, initialState)

  return (
      <div>
        <h1>Boutique</h1>
        <ProductList dispatch={dispatch}/> 
        <hr />
        <Cart state={state}/>
      </div>
  )
}

export default App
