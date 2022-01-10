import React from "react";

export default function Synonyms(props) {
  if (props.syndef) {
    return (
      <ul className="Synonyms">
        {props.syndef.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  }
}
