import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.def);
  return (
    <div className="Meaning">
      <h4>{props.def.partOfSpeech}</h4>

      {/* <p>{props.def.definitions[0].definition}</p>
      <p>"{props.def.definitions[0].example}"</p> */}
      {props.def.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Examples:</strong>
              <em>{definition.example}</em>
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
