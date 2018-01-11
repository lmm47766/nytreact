import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () =>
 <Router>
	  <div className='container'>
		    <Route exact path='/' component={Home} />
	  </div>
  </Router>;

export default App;
