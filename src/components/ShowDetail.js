import React from "react";

const ShowDetail = ({ info }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{info.title}</div>
        {info.snippet}
      </div>
    </div>
  );
};

export default ShowDetail;
