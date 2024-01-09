import React, { useState } from "react";
import ReactDOM from "react-dom";
import ValueColorMap from "./ValueColorMap.jsx";
import ButtonDivMap from "./ButtonDivMap.jsx";
import AllColors from "./AllColors.jsx";

const ColorBand = (props) => {
  const changeColor = (obj) => {
    const target = obj.target.className;
    // console.log(obj.target.className);
    const choice = obj.target.innerHTML;
    // console.log(obj.target.innerHTML);
    document.getElementById(ButtonDivMap.get(target)).style =
      ValueColorMap.get(choice);
  };

  // props: div id, button id, className
  return (
    <>
      <div onClick={changeColor} id={props.divId}>
        <h3>{props.heading}</h3>
        <button
          id={props.idBut1}
          className={props.className}
          style={{ background: AllColors[0] }}
        >
          0
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[1] }}
        >
          1
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[2] }}
        >
          2
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[3] }}
        >
          3
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[4] }}
        >
          4
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[5] }}
        >
          5
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[6] }}
        >
          6
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[7] }}
        >
          7
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[8] }}
        >
          8
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[9] }}
        >
          9
        </button>
      </div>
    </>
  );
};

export default ColorBand;
