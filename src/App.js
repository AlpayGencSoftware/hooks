 
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
            <ClassComponent/>
        </div>
        <div className='box'>
            <FunctionalComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
