import logo from './logo.svg';
import './App.css';
import getGreeting from './components/react-component.jsx';

function App() {
  const user = {
    firstName: "Tymur",
    lastName: "Radjapov"
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {getGreeting(user)}
      </header>
    </div>
  );
}

export default App;
