import { Fragment } from "react/cjs/react.production.min";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Divider from "@material-ui/core/Divider";
import "./jumbo.css";

const Block = (props) => {
  const [auto, setAuto] = useState(false);

  function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(0); //The maximum is exclusive and the minimum is inclusive
  };
  let hash = stringGen(256);
  let userName = "Noah";
  let transactions = [
    { key: getRandomInt(0, 1), to: userName, from: userName },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    let guess = getRandomInt(0, 9);
    let answer = getRandomInt(0, 9);
    console.log(guess);
    console.log(answer);
    if (guess === answer) {
      props.onNewBlock(hash, transactions);
    }
    hash = stringGen(256);
  };
  const autoSubmitHandler = (event) => {
    event.preventDefault();
    let guess = getRandomInt(0, 10000);
    let answer = getRandomInt(0, 10000);

    while (guess !== answer) {
      guess = getRandomInt(0, 10000);
      answer = getRandomInt(0, 10000);
      console.log("reLo Guessed: " + guess);
      console.log("The answer was: " + answer);
    }
    if (guess === answer) {
      props.onNewBlock(hash, transactions);
      hash = stringGen(256);
    }
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       props.onNewBlock(hash, transactions);
  //       hash = stringGen(256);
  //     }, 30000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <Fragment className="jumbotron">
      <div className="container">
        <Divider></Divider>
        <br></br>
        <Fragment className="container">
          <form
            action=""
            onSubmit={submitHandler}
            style={{ display: "inline-block", width: "auto" }}
          >
            <Button
              variant="success"
              type="submit"
              style={{ display: "inline-block", "margin-right": "20px;" }}
            >
              Mine
            </Button>
          </form>
        </Fragment>
        <br />
        <Fragment>
          <br />
          <form
            action=""
            onSubmit={autoSubmitHandler}
            style={{ display: "inline-block", width: "auto" }}
          >
            <Button type="submit">AutoMine</Button>
          </form>
          <br></br>
        </Fragment>
      </div>
    </Fragment>
    
  );
};
export default Block;
