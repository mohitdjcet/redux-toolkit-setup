import {useDispatch} from 'react-redux'
import { increment,decrement,reset } from '../features/counter/counterSlice';

function CounterControl() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>+</button> {" "}
      <button onClick={()=>dispatch(decrement())}>-</button> {" "}
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}
export default CounterControl;