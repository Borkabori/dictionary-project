import React from "react";
import soundsign from "./images/soundsign.png";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={soundsign} className="Sound" alt="soundsign" />
      </a>
      <br />
      <span className="Pronaunciation">{props.phonetic.text}</span>
    </div>
  );
}
