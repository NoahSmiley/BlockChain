import { Form } from "react-bootstrap"
import { Fragment } from "react/cjs/react.production.min"
import "./jumbo.css";
const Creation = ()=>{
    return(
        <div className="container">
        <div className="jumbotron" style={{backgroundColor:"#3b4049"}}>
        <Form >
        <Form.Group className="mb-3">
          <Form.Label>Purchase Coin</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount (0.0002)"
            type="decimal"
            placeholder="0.0007"
          />
        </Form.Group>
        </Form>
        </div>
        </div>
    )
}
export default Creation;