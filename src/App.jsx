import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Welcome to Redux React App</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button> {" "}
      <button onClick={()=>dispatch(decrement())}>-</button> {" "}
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}
export default App;