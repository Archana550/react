import logo from './logo.svg';
import react,{useState} from "react";
import './App.css';

function App() {
const [count, setCount] = useState(0)
  return (
    <div className="App">
    <h1>A simple counter made with state/hooks</h1>
    <p>Count: {count}</p>
     <button onClick={()=>setCount(0)}>Reset Counter</button>
     <button  onClick={()=>setCount(count+1)}>Increase Counter</button>
     <button  onClick={()=>count<= 0?"":setCount(count-1)}>Decrease Counter</button>
     
    </div>
  );
}

export default App;
