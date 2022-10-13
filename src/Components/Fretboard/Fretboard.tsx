import React from "react";
import styled from "styled-components";

const Frtboard = styled.div`
  display: flex;
  flex-direction: column;
  background: #be975b;
  width: 100%;
  height: 302px;
  margin-top: 50px;
`;
const String = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 10px;
    background: linear-gradient(#eee, #999);
    box-shadow: 76px;
  }
`;
const Note = styled.div``;

function Fretboard() {
  return (
    <Frtboard>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
      <String>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </String>
    </Frtboard>
  );
}

export default Fretboard;
