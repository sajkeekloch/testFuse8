import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import './components/font/font.sass'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Main/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
