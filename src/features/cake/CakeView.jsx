import React from 'react'
import {order, restock} from './cakeSlice';
import { useDispatch, useSelector } from 'react-redux';

export function CakeView() {
    const dispatch = useDispatch();
    const cakes = useSelector((state)=>state.cake.numberOfCakes);
  return (
    <div>
        <h1>Number of cakes {cakes}</h1>
        <button onClick={()=>dispatch(order())}>Order</button>
        <button onClick={()=>dispatch(restock(10))}>Restock</button>
    </div>
  )
}
