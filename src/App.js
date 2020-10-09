import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import "./components/icons"
import Home from './pages/home/Home';
import Programming from './pages/programming/Programming';
import Technologies from './pages/technologies/Technologies';
import Education from './pages/education/Education';
import Job from './pages/job/Job';
import Personal from './pages/personal/Personal';
import Certificates from './pages/certificates/Certificates';
import Result from './pages/result/Result';
import Privacy from './pages/privacy/Privacy';
import PageNotFound from './pages/pagenotfound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/s/programming" component={ Programming }/>
          <Route exact path="/s/technologies" component={ Technologies }/>
          <Route exact path="/s/education" component={ Education }/>
          <Route exact path="/s/job" component={ Job }/>
          <Route exact path="/s/personal" component={ Personal }/>
          <Route exact path="/s/certificates" component={ Certificates }/>
          <Route exact path="/s/result" component={ Result }/>
          <Route exact path="/privacy-policy" component={ Privacy }/>
          <Route path="*" component={ PageNotFound }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
