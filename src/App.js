import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './Pages/Home'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
    <I18nextProvider i18n={i18n} initialLanguage={'en'}>
	  <Router>
          <Route exact path="/" component={Home}/>
      </Router>
	</I18nextProvider>
    );
  }
}

export default App;
