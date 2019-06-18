import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Likes from './Likes';
import './App.css';
import SearchContent from './SearchContent';

function App() {
  return (
    <div className="app">
      <Router>
        <Header className="app__header" />
        <div className="app__page">
          <Sidebar className="app__sidebar" />
          <Switch>
            <Route exact path="/" component={() => <Home className="app__content" />} />
            <Route path="/likes" component={() => <Likes className="app__content" />} />
            <Route path="/search/:query" component={() => <SearchContent className="app__content" />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
