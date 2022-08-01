import React from 'react'
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ordered, restocked} from './icecreamSlice';

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector(state => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={()=> dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={()=> dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}
