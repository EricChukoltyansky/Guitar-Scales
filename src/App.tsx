import "./App.css";
import Fretboard from "./Components/Fretboard/Fretboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    --color-text: black;
  }
`;

function App({children}: {children?: React.ReactNode}) {
  return (
    <>
    {/* @ts-ignore */}
      {/* <GlobalStyles> */}
      <Fretboard/>
      {/* </GlobalStyles> */}
    </>
  );
}

export default App;
