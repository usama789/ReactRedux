import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useIncrement,useDecrement} from './action/index';
const App = () => {
  const myState = useSelector((state)=> state.Counter);
  const dispatch= useDispatch();
  const setIncrementDecision = () => {
    dispatch(useIncrement);
  };
  return (
    <>
    <div className='container'>
          <h1>Increment Decrement Counter</h1>
          <h2>Using React Redux</h2>
    </div>
    <div>
    <button className = 'decrement' title='decrement'><span>-</span></button>
      <input type="text" value={myState}></input>
      <button className = 'increment' title='increment' onClick={setIncrementDecision}><span>+</span></button>

    </div>
    </>
  )
}

export default App