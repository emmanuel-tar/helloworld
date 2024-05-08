import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message.js';

function App() {
  return (
    <div className="App">
    <Message />
      {/*<Greet /> */}
      {/*<Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;
