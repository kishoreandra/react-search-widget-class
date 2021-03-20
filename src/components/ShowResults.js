import React from "react";
import ShowDetail from "./ShowDetail";

const ShowResults = ({ results }) => {
  const list = results.map((result) => {
    return <ShowDetail info={result} />;
  });
  return (
    <div className="ui inverted segment">
      <div className="ui inverted relaxed divided list">{list}</div>
    </div>
  );
};

export default ShowResults;
