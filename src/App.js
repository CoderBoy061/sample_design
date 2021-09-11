import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
