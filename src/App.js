import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react/cjs/react.production.min";
import NoCoin from "./Components/NoCoin";
import BlockChain from "./Components/BlockChain";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Fragment>
      <div className="container">
        <BlockChain />
      </div>
    </Fragment>
  );
}

export default App;
