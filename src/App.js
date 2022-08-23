import logo from './assets/img/logo.png';
import './App.css';
import App_presentation from './components/App_presentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App_presentation />
      </header>
    </div>
  );
}

export default App;
