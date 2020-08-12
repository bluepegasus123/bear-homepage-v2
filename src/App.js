import React from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Bar from './components/navbarComponent/navigationBar';
import Highlight from './components/highlightComponent/highlight';
import Action from './components/actionComponent/action';
import Logos from './components/logosComponent/logos';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Story from './components/storyComponent/Index';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Bar /> */}
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Highlight />
            <div className="togeth">
            <Action />
            <Logos />
            </div>
          </React.Fragment>
        )} />
        <Route exact path="/story" component={Story} />
      </div>
    </Router>
  );
}

export default App;
