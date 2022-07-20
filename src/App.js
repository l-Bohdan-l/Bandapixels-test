/* eslint-disable no-unused-vars */
import './App.css';
import { Searchbar } from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <p>
            Weather
          </p>
          <Searchbar/>
        </div>
      </header>
      <div>
        <div>
          <h1>Weather</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
