
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './features/counter/CounterSlice';

function App() {
  let count=useSelector((state)=> state.counter.value);
  let dispatch=useDispatch();

  return <div>
      <h1>RTK Counter</h1>
      <h2>Count = {count}</h2>

      <button onClick={()=> dispatch(increment())}> Count++</button>
      &nbsp; &nbsp;
      <button onClick={()=> dispatch(decrement())}>Count--</button>
       &nbsp; &nbsp;
       <button onClick={()=> dispatch(incrementByAmount(5))}>Count+5</button>
  </div>
}

export default App
