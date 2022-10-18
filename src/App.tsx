import "./App.css";
import Fretboard from "./Components/Fretboard/Fretboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    --fretboard-height: 300;
    --number-of-strings: 6;
    --string-height:10;
    --string-top-position: calc(var(--fretboard-height) / var(--number-of-strings) / 2);
    --number-of-frets: 22;
  }
`;

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
      <Fretboard />
    </>
  );
}

export default App;
