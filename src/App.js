import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Battle from './components/Battle';
import Stats from './components/Stats';
import LatestGames from './components/LatestGames';
import SpecificGame from './components/SpecificGame';
import LastGame from './components/LastGame';
import Start from './components/Start';

function App() {
  const [hamster1, setHamster1] = useState(null)
  const [hamster2, setHamster2] = useState(null)


  return (
    <Router>
      <nav className="Navbar">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/battle"> Battle </NavLink>
        <NavLink to="/matchup"> Games </NavLink>
        <NavLink to="/stats"> Stats </NavLink>
      </nav>
      <Switch>
        <Route path="/stats">
          <div className="App">
            <main>
              <Stats className="Games" />
            </main>
          </div>
        </Route>
        <Route path="/matchup/:id1/:id2">
          <div className="App">
            <header>
            </header>
            <SpecificGame className="Games" />
          </div>
        </Route>
        <Route path="/lastgame">
          <div className="App">
            <main>
              <LastGame />
            </main>
          </div>
        </Route>
        <Route path="/matchup">
          <div className="App">
            <LatestGames className="Games" />
          </div>
        </Route>
        <Route path="/battle/:id1/:id2">
          <div className="App">
            <main>
              <Battle
                hamster1={hamster1} setHamster1={setHamster1}
                hamster2={hamster2} setHamster2={setHamster2} />
            </main>
          </div>
        </Route>
        <Route path="/battle">
          <div className="App">
            <main>
              <Battle
                hamster1={hamster1} setHamster1={setHamster1}
                hamster2={hamster2} setHamster2={setHamster2} />
            </main>
          </div>
        </Route>
        <Route path="/">
          <div className="Start">
            <div className="StartContainer">
              <main >
                <Start />
              </main>
            </div>
          </div>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
