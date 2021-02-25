import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import About from './components/About';
import Tasks from './components/Tasks';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Route exact path="/">
        
              <Header />
              <Tasks />
        
      </Route>
      <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
