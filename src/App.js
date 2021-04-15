import logo from './logo.svg';
import './App.css';
import {PageBody} from './components/PageBody'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Just Making a Mess in the Laboratory
        </a>
        <p/>
      </header>
      <PageBody/>
      <p/>
        <Footer/>
    </div>
  );
}

export default App;
