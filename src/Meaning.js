import React from "react";

export default function Meaning(props) {
  //   console.log(props.def);
  return (
    <div className="Meaning">
      <h4>{props.def.partOfSpeech}</h4>

      {/* <p>{props.def.definitions[0].definition}</p>
      <p>"{props.def.definitions[0].example}"</p> */}
      {props.def.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
