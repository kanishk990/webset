import logo from './logo.svg';
import './App.css';
import Button from './component/button'
import axios from 'axios'


function App() {

  
  
  const handleClick = ()=> { 
    //make your http request here
    //you can use axios or fetch
    const getdata =  async () => {
      try {
        console.log("I am called")
        const response = await axios.get("http://localhost:3000/")
        console.log(response)
      }
      catch(err){
        console.log(err)
      }
    }
    getdata();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        < Button onClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
