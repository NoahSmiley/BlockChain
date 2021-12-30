import { Fragment } from "react/cjs/react.development";
import { useState, useEffect } from "react";

const BlockList = (props) => {
  const [blockChain, setBlockChain] = useState(props.blocks);
  console.log(blockChain);
  useEffect(() => {
    setBlockChain(props.blocks);
  }, [props]);

  const blockList = blockChain.map((block, i) => {
    return (
      <Fragment>
        <br />
        <div className="container">
          <h1>
            <b>BLOCKCHAIN</b>
          </h1>
          <div className="jumbotron">
            <div className="container">
              <p>Block: {i}</p>
              <p>
                Hash:<b>{block.hash.slice(0, 20)}...</b>
              </p>
              {block.transactions.map((tran) => {
                return (
                  <Fragment>
                    <p>
                      <b>TRANSACTIONS:</b>
                    </p>
                    <p>To: {tran.to}</p>
                    <p>From: {tran.from}</p>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  });
  return <Fragment>{blockList}</Fragment>;
};
export default BlockList;
