import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {order, restock} from './icecreamSlice';

export function IcecreamView() {
    const dispatch = useDispatch();
    const icecreams = useSelector((store)=>store.icecream.numberOfIcecream)
  return (
    <div>
        <h1>Number of icecreams {icecreams}</h1>
        <button onClick={()=>{dispatch(order())}}>Order</button>
        <button onClick={()=>{dispatch(restock(5))}}>Restock</button>
    </div>
  )
}
