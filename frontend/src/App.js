import "./App.css";
import Home from "./Components/Login/home";
import Admin_Auth from "./Components/Auth/Admin_Auth/Admin_Auth";
import NGO_Auth from "./Components/Auth/NGO_Auth/NGO_Auth";
import Factory_Auth from "./Components/Auth/Factory_Auth/Factory_Auth";
import Factories from "./Components/Admin/Factories/Factories";
import Add from "./Components/Admin/Add/Add";
import Public from "./Components/SawoApis/public";
import Ngo from "./Components/SawoApis/ngo";
import Inspect from "./Components/NGO/Inspect/Inspect";
import Reports from "./Components/Admin/Reports/Reports";
import File from "./Components/Public/File/File";
import Complains from "./Components/Public/complains/complains";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Assign from "./Components/Assign/Assign";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/public" exact component={Public} />
          <Route path="/ngo" exact component={Ngo} />
          <Route path="/admin/auth" exact component={Admin_Auth} />
          <Route path="/factories" exact component={Factories} />
          <Route path="/ngo/auth" exact component={NGO_Auth} />
          <Route path="/factory/auth" exact component={Factory_Auth}/>
          <Route path="/admin/add" exact component={Add} />
          <Route path="/inspect" exact component={Inspect} />
          <Route path="/assign" exact component={Assign} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/file" exact component={File} />
          <Route path="/compalins" exact component={Complains} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
