import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
