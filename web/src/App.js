import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function selectData(){
  axios.post('/api/testData',["가","나","다"])
      .then(function (res){
        console.log(res)
      });
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
                <div>
                    <button onClick={() => selectData()}>조회</button>
                </div>
            </a>
        </header>

      </div>
  );
}

export default App;
