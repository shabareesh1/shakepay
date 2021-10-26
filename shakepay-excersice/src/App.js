import './App.css';
import Cryptolist from "./Components/Cryptolist";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Transaction from "./Components/Transaction";


function App() {
  return (
      <Router >
    <div className="App">
            <Route exact path="/" component={Cryptolist} />
        <Route  exact path="/transactions" component={Transaction} />
    </div>
    </Router>
  );
}

export default App;
