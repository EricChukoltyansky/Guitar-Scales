import React from "react";
import { Frtboard, String, Note, Body } from "./Styling";

function Fretboard() {
  const [frets, setFrets] = React.useState(25);
  const [strings, setStrings] = React.useState(6);
  return (
    <Body>
    <Frtboard>
      {Array.from({ length: strings }, (_, i) => (
        <String key={i}>
          {i === 0 &&
            Array.from({ length: frets }, (_, i) => (
              <Note key={i}>
                {i === 3 && <div className="single-fretmark"></div>}
                {i === 5 && <div className="single-fretmark"></div>}
                {i === 7 && <div className="single-fretmark"></div>}
                {i === 12 && <div className="double-fretmark"></div>}
                {i === 15 && <div className="single-fretmark"></div>}
                {i === 17 && <div className="single-fretmark"></div>}
                {i === 19 && <div className="single-fretmark"></div>}
                {i === 22 && <div className="single-fretmark"></div>}
                {i === 24 && <div className="double-fretmark"></div>}
              </Note>
            ))}
          {i !== 0 && Array.from({ length: frets }, (_, i) => <Note></Note>)}
        </String>
      ))}
    </Frtboard>
    </Body>
  );
}

export default Fretboard;
