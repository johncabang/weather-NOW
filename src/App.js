import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={WeatherCard} />
        <WeatherCard />
      </Switch>
    </Router>
  );
}

export default App;
