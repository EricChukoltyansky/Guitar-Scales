import React from "react";
import styled from "styled-components";

const Frtboard = styled.div`
  display: flex;
  flex-direction: column;
  background: #be975b;
  width: 100%;
  height: calc(var(--fretboard-height) * 1px);
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
    height: calc(var(--string-height) * 1px);
    background: linear-gradient(#eee, #999);
    box-shadow: 10px 3px 10px #806233;
    z-index: 1;
    position: absolute;
    /* top: 22px; */
    top: calc(var(--string-top-position) * 1px);
  }
`;
const Note = styled.div`
  display: flex;
  flex: 1;
  border-right: 10px solid;
  border-image: linear-gradient(to left, #777, #bbb, #777) 1 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  &:first-child {
    background: #161717;
    min-width: 76px;
    border-right: 12px;
    flex-grow: 0;
    flex-shrink: 0;
    border-image: linear-gradient(to left, #bbb, #fff, #bbb) 1 100%;
  }

  &::before {
    content: "C#";
    width: 33px;
    height: 33px;
    border-radius: 50%;
    line-height: 33px;
    text-align: center;
    background-color: teal;
    z-index: 2;
    color: #eee;
    opacity: 0;
  }

  .single-fretmark {
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #806233;
    top: calc(var(--fretboard-height) / 2 * 1px);
    transform: translate(0, -50%);
  }

  .double-fretmark::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #806233;
    /* top: 58px; */
    top: calc(var(--double-fretmark-position-1) * 1px);
    transform: translate(-140%, -50%);
  }

  .double-fretmark::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #806233;
    top: calc(var(--double-fretmark-position-2) * 1px);
    transform: translate(-140%, -50%);
  }
`;

function Fretboard() {
  return (
    <Frtboard>
      <String>
        <Note />
        <Note />
        <Note />
        <Note>
          <div className="single-fretmark"></div>
        </Note>
        <Note />
        <Note>
          <div className="single-fretmark"></div>
        </Note>
        <Note />
        <Note>
          <div className="single-fretmark"></div>
        </Note>
        <Note />
        <Note>
          <div className="single-fretmark"></div>
        </Note>
        <Note />
        <Note />
        <Note>
          <div className="double-fretmark"></div>
        </Note>
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
