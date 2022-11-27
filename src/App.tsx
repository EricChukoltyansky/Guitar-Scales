import "./App.css";
import Fretboard from "./Components/Fretboard/Fretboard";
// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//   body {
//     --fretboard-height: 300;
//     --number-of-strings: 6;
//     --string-height:10;
//     --half-string-height:calc(var(--string-height) / 2);
//     --string-top-position: calc(var(--fretboard-height) / var(--number-of-strings) / 2 - var(--half-string-height)) ;
//     --number-of-frets: 22;
//     --double-fretmark-position-1: calc(var(--fretboard-height) * 0.25);
//     --double-fretmark-position-2: calc(var(--fretboard-height) * 0.75);
//   }
// `;

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      {/* <GlobalStyles />
      {children} */}
      <Fretboard />
    </>
  );
}

export default App;
