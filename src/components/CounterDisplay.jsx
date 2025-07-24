import {useSelector} from 'react-redux'

function CounterDisplay() {
  const count = useSelector((state)=>state.counter.count);
  return (
    <div>
      <h1>Shared State</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}
export default CounterDisplay;