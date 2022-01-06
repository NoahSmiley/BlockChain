import { Fragment } from "react/cjs/react.production.min";
import BlockChain from "./Components/BlockChain";
import {NavDropdown,Nav,Navbar,Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Creation from "./Components/Creation"
import CreationCenter from "./Components/CreationCenter"
import { Switch } from "@material-ui/core";
import {LinkContainer} from 'react-router-bootstrap'
import "./App.css"
function App() {
  return (

    <Fragment className="App" style={{color:"white"}}>
{/*       
      <Navbar expand="lg" fixed="top" style={{backgroundColor: "#3b4049", color:"white"}}>
  <Container>
    <Navbar.Brand style={{color:"white"}} href="#home">The<b>BLOCK</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color:"white"}} href="#home">Home</Nav.Link>
        <Nav.Link style={{color:"white"}} >Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
      <div className="container"style={{marginTop:"50px"}}>
        {/* <Creation/> */}
      {/* <BlockChain crypto={{cryptoName:"samCoin",motto:"Sam's Crypto",lower:9999999,upper:9999999}}/> */}
        <BlockChain crypto={{cryptoName:"reLo",motto:'"Worlds Most Valuable Cypto"',lower:999999999,upper:9999999999}}/>
      </div>
    </Fragment>
  );
}

export default App;
