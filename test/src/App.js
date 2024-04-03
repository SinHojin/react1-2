import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import CommentList from './chapter_05/CommentList';
import Clock from './chapter_04/Clock';

function App() {
  return (
    <div className="App">
      <CommentList/>

      <Welcome name = "지흥민"/>
      <Welcome name = "이원도"/>
      <Welcome name = "박준한"/>
      <Clock></Clock>
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
      </header>
    </div>
  );
}

export default App;
