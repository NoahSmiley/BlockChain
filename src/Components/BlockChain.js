import { Fragment } from "react/cjs/react.production.min";
import Block from "./Block";
import { useState, useEffect } from "react";
import BlockList from "./BlockList";
import NoCoin from "./NoCoin";

const BlockChain = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(2); //The maximum is exclusive and the minimum is inclusive
  };

  const [exchangeRate, setExchangeRate] = useState(getRandomInt(80000, 100000));
  const [blockChain, setBlockChain] = useState([]);
  const [balance, setBalance] = useState(getRandomInt(20000, 50000));
  const [coinBalance, setCoinBalance] = useState([0.0, parseFloat(0.0)]);
  const [userInfo, setUserInfo] = useState([balance, coinBalance, []]);
  const [availBlocks, setAvailBlocks] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setExchangeRate(getRandomInt(80000, 100000));
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  //suc
  //transactions from buyers and sellers
  //date solve time
  //hash
  //transactions
  useEffect(
    () => {
      return () => {
        setBalance(balance);
        setCoinBalance(coinBalance);
      };
    },
    [userInfo],
    [exchangeRate]
  );

  const balanceHandler = (amount, percent) => {
    setUserInfo(() => [amount, userInfo[1], userInfo[2]]);
    setCoinBalance([
      percent * exchangeRate,
      coinBalance[1] + parseFloat(percent),
    ]);
    console.log(coinBalance);
    setBalance(amount);
  };

  const newBlockHandler = (hashValue, transactionsHistory) => {
    setAvailBlocks(availBlocks + 1);
    setBlockChain((prevList) => [
      ...prevList,
      { hash: hashValue, transactions: transactionsHistory },
    ]);
  };

  const blockUpdateHandler = () => {
    setAvailBlocks(availBlocks - 1);
  };
  return (
    <Fragment>
      <div className="container">
        <NoCoin
          user={userInfo}
          exchange={exchangeRate}
          onBalanceChange={balanceHandler}
          available={availBlocks}
          onTransaction={blockUpdateHandler}
        />
        <div className="container">
          <div className="container">
            <Block onNewBlock={newBlockHandler} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <BlockList blocks={blockChain}></BlockList>
        </div>
      </div>
    </Fragment>
  );
};
export default BlockChain;
