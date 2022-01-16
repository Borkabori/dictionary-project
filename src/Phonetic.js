import React from "react";
import soundsign from "./images/soundsign.png";

import "./Phonetic.css";
import "./Meaning.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span className="Phonetic">
      <span className="Pronaunciation ton">{props.phonetic.text}</span>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={soundsign} className="Sound ton" alt="soundsign" />
      </a>
    </span>
  );
}
