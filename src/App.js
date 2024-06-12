import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
function App() {

  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
