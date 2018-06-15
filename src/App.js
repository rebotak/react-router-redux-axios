import React from 'react';
import './assets/scss/main.css';
// import './assets/scss/font-awesome.min.css';
import CompanyProfile from './containers/CompanyProfile';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => (
      <div className="App">
        <Router>
          <Route path="/" component={CompanyProfile}/>
        </Router>
      </div>
    )
export default App;
