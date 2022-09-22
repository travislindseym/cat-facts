import React from "react";

function SingleCatFact(props) {
  return (
    <React.Fragment>
      <p className="fs-5">• {props.fact.fact}</p>
    </React.Fragment>
  );
}

export default SingleCatFact;
