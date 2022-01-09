import React from "react";

export default function Results(props) {
  //   console.log(props.outcome);
  if (props.outcome) {
    return <div className="Results">Result</div>;
  } else {
    return null;
  }
}
