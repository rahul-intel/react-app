import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './dashboard/dashboard';
import Login from './login/Login';
import Register from "./register/Register";
import Header from "./common/header";
import ClassComponents from "./class-components/classComponents";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="Content">
          <Switch>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/class-components">
              <ClassComponents></ClassComponents>
            </Route>
            <Route path="/">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
