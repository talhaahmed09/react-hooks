import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import UseCallbackHook from './Components/UseCallbackHook';
import UseMemoHook from './Components/UseMemoHook';
import UseReducerHook from './Components/UseReducerHook';

function App() {
  return (
    <div className="App">
      <h1>Use State</h1>
      <UseStateHook/>
      <h1>Use Effect</h1>
      <UseEffectHook/>
      <h1>Use Ref</h1>
      <UseRefHook/>
      <h1>Use call back</h1>
      <UseCallbackHook/>
      <h1>Use Memo Hook</h1>
      <UseMemoHook/>
      <h1>Use Reducer Hook</h1>
      <UseReducerHook/>
    </div>
  );
}

export default App;
