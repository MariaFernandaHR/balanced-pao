import logo from './logo.svg';
import RECIPES from './app/shared/recipes';

import './App.css';

function App() {
  const { title,image,url,text,ingredients,preparation }= RECIPES;

  return (
    <div className="App">
      <header className="App-header">
        <img src={RECIPES[0].image} className="App-logo" alt="logo" />
        <p>
          {RECIPES[0].title}{RECIPES[0].text}
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
