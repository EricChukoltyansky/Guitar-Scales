import React from "react";
import { Frtboard, String, Note, Body } from "./Styling";

function Fretboard() {
  const [frets, setFrets] = React.useState(25);
  const [strings, setStrings] = React.useState(6);
  return (
    <Body numberOfStrings={strings}>
    <Frtboard>
      {Array.from({ length: strings }, (_, i) => (
        <String key={i}>
          {i === 0 &&
            Array.from({ length: frets }, (_, i) => (
              <Note key={i}>
                {i === 3 && <div className="single-fretmark">3</div>}
                {i === 5 && <div className="single-fretmark">5</div>}
                {i === 7 && <div className="single-fretmark">7</div>}
                {i === 12 && <div className="double-fretmark">12</div>}
                {i === 15 && <div className="single-fretmark">15</div>}
                {i === 17 && <div className="single-fretmark"></div>}
                {i === 19 && <div className="single-fretmark"></div>}
                {i === 22 && <div className="single-fretmark"></div>}
                {i === 24 && <div className="double-fretmark">24</div>}
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
