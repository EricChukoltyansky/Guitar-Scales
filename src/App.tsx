import "./App.css";
import Fretboard from "./Components/Fretboard/Fretboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    --fretboard-height: 300;
    
  }
`;

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      {/* @ts-ignore */}
      <GlobalStyles />
      {children}
      <Fretboard />
    </>
  );
}

export default App;
