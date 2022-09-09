 
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-box red'>
            <ClassComponent/>
        </div>
        <div className='main-box blue'>
            <FunctionalComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
