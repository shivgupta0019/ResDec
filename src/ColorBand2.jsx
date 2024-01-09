import React from "react";
import ButtonDivMap from "./ButtonDivMap.jsx";
import AllColors from "./AllColors.jsx";
import ValueColorMap from "./ValueColorMap.jsx";

const ColorBand2 = (props) => {
  const changeColor = (obj) => {
    const target = obj.target.className;
    // console.log(obj.target.className);
    const choice = obj.target.innerHTML;
    // console.log(obj.target.innerHTML);
    document.getElementById(ButtonDivMap.get(target)).style =
      ValueColorMap.get(choice);
  };
  return (
    <>
      <div onClick={changeColor} id={props.divId}>
        <h3>{props.heading}</h3>
        <button
          className={props.className}
          style={{ background: AllColors[10] }}
        >
          5%
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[11] }}
        >
          10%
        </button>
        <button
          className={props.className}
          style={{ background: AllColors[12] }}
        >
          20%
        </button>
      </div>
    </>
  );
};

export default ColorBand2;
