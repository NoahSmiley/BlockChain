import { Fragment } from "react/cjs/react.development";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./jumbo.css";
import NoCoinICON from "./nocoin.png";

const NoCoin = (props) => {
  const [balance, setBalance] = useState(props.user[0]);
  const [coinBalance, setCoinBalance] = useState([
    props.user[1][0],
    props.user[1][1],
  ]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setCoinBalance([
      (Number(coinBalance[1]) * props.exchange).toFixed(2),
      (coinBalance[1]),
    ]);
  }, [props.exchange]);

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (props.available !== 0) {
      let total = (balance - amount * props.exchange).toFixed(2);
      if (total > 0) {
        props.onTransaction();
        setBalance(total);
        console.log(coinBalance[1]);
        console.log(amount);
        console.log(coinBalance[1] + amount);

        setCoinBalance([
          Number(coinBalance[0]) + Number(amount) * props.exchange,
          Number(coinBalance[1]) + Number(amount),
        ]);

        props.onBalanceChange(total, amount);
        setAmount("");
        console.log(props.user);
      } else {
        alert("Insuficient Funds!");
      }
    } else {
      alert("No Available Blocks");
    }
  };
  const sellHandler = (event) => {
    event.preventDefault();
    if((coinBalance[0] - Number(amount)>0) * props.exchange && Number(coinBalance[1]) + Number(amount)>0){
    let total = (Number(balance) + Number(amount) * props.exchange).toFixed(2);

    console.log("AMOUNT IS"+Number(amount));
    setBalance(total);
    setCoinBalance([
      Number(coinBalance[0]) - Number(amount)* props.exchange,
      Number(coinBalance[1]) - Number(amount)
    ]);
    props.onBalanceChange(total, amount);
    console.log(total)
    console.log(amount)

  }else{
    alert("Insufficient Coins!")
  }
    setAmount("");
  };

  return (
    <Fragment>
      <br />

      <div className="container">
        <div className="container">
          <h1>
            {props.cryptoInfo.cryptoName}
            <b style={{ fontWeight: "bolder" }}></b>
          </h1>
          <p>{props.cryptoInfo.motto}</p>
        </div>
        <div className="container">
          <div
            className="jumbotron"
            style={{ paddingTop: "-50px", backgroundColor: "#3b4049" }}
          >
            <h4>Price: ${props.exchange}</h4>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Purchase Coin</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount (0.0002)"
                  type="decimal"
                  onChange={amountHandler}
                  placeholder="0.0007"
                  value={amount}
                />
              </Form.Group>
              <p>
                {(() => {
                  if (amount !== "")
                    return (
                      <Form.Text className="text-muted">
                        Current Exchange: $
                        {Number(amount * props.exchange).toFixed(2)}
                      </Form.Text>
                    );
                  else
                    return (
                      <Form.Text className="text-muted">
                        Enter an Amount
                      </Form.Text>
                    );
                })()}
              </p>
              <Button variant="success" type="submit">
                Buy Coin
              </Button>
            </Form>
            <br />
            <Form onSubmit={sellHandler}>
              <Form.Group className="mb-3">
                <h4>Sell Coin:</h4>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount (0.0002)"
                  type="decimal"
                  onChange={amountHandler}
                  placeholder="0.0007"
                  value={amount}
                />
              </Form.Group>
              <p>
                {(() => {
                  if (amount !== "")
                    return (
                      <Form.Text className="text-muted">
                        Current Exchange: $
                        {Number(amount * props.exchange).toFixed(2)}
                      </Form.Text>
                    );
                  else
                    return (
                      <Form.Text className="text-muted">
                        Enter an Amount
                      </Form.Text>
                    );
                })()}
              </p>
              <Button variant="primary" type="submit">
                Sell Coin
              </Button>
            </Form>
            <br></br>
            <h5>Balance: ${balance} </h5>
            <h5>Coin Balance: ${Number(coinBalance[0]).toFixed(2)}</h5>
            <h5>Total Coins: {Number(coinBalance[1]).toFixed(10)}</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default NoCoin;
