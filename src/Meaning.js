import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  // console.log(props.def);
  return (
    <div className="Meaning">
      <h4>{props.def.partOfSpeech}</h4>

      {/* <p>{props.def.definitions[0].definition}</p>
      <p>"{props.def.definitions[0].example}"</p> */}
      {props.def.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>
              <br />
              <div className="example">{definition.example}</div>
              <br />
              <Synonyms syndef={definition.synonyms} />
              {/* <strong>Synonyms:</strong>
              {definition.synonyms} */}
            </p>
          </div>
        );
      })}
    </div>
  );
}
