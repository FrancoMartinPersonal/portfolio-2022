import logo from './logo.svg';
import './App.css';
import Nav from './screens/nav';
import Homescreen from './screens/Homescreen';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/* <Nav></Nav> */}
      <Homescreen/>
      <Nav></Nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
