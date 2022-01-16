import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  // console.log(props.outcome);
  if (props.outcome) {
    return (
      <div className="Results">
        <section>
          <span className="Word">
            <strong>{props.outcome.word}</strong>
          </span>

          {props.outcome.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>
        {props.outcome.meanings.map(function (meaning, index) {
          // return meaning.definitions[0].definition;
          return (
            <section key={index}>
              <Meaning def={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
