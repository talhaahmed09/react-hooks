import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
function App() {
  return (
    <div className="App">
      <h1>Use State</h1>
      <UseStateHook/>
      <h1>Use Effect</h1>
      <UseEffectHook/>
      <h1>Use Ref</h1>
      <UseRefHook/>
    </div>
  );
}

export default App;
