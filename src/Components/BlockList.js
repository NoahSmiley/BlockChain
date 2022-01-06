import { Fragment } from "react/cjs/react.development";
import { useState, useEffect } from "react";

const BlockList = (props) => {
  const [blockChain, setBlockChain] = useState(props.blocks);
  console.log(blockChain);

  useEffect(() => {
    setBlockChain(props.blocks);
  }, [props.blocks]);

  const blockList = blockChain.map((block, i) => {
    return (
      <Fragment>
        <div className="container">
          <div
            className="jumbotron"
            style={{ backgroundColor: "#3b4049", width: "500px" }}
          >
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
  return (
    <Fragment>
      <div className="container">
        <br></br>
        <h5 style={{ fontWeight: "thinner" }} className="container">
          The <b style={{ fontWeight: "bolder" }}>BLOCK:</b>
        </h5>
        <br></br>
        {blockList}
      </div>
    </Fragment>
  );
};
export default BlockList;
