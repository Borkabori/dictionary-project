import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  // console.log(props.outcome);
  if (props.outcome) {
    return (
      <div className="Results">
        <h2>
          <strong>{props.outcome.word}</strong>
        </h2>
        {props.outcome.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.outcome.meanings.map(function (meaning, index) {
          // return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning def={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
