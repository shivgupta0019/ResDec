import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColorBand from "./ColorBand.jsx";
import ColorBand2 from "./ColorBand2.jsx";
import ColorValMap from "./ColorValMap.jsx";

let value1 = "0",
  value2 = "0",
  value = "0",
  unit,
  v1 = 0,
  v2 = 0,
  v3 = 0,
  v4 = 0;

const getUnit = (x) => {
  if (x > Math.pow(10, 6)) {
    value /= Math.pow(10, 6);
    value1 /= Math.pow(10, 6);
    value2 /= Math.pow(10, 6);
    return "M";
  } else if (x > Math.pow(10, 3)) {
    value /= Math.pow(10, 3);
    value1 /= Math.pow(10, 3);
    value2 /= Math.pow(10, 3);
    return "k";
  }
  return "";
};

const App = () => {
  let [val1, setVal1] = useState(value1);
  let [val2, setVal2] = useState(value1);
  let [val, setVal] = useState(value);
  const changeValue = () => {
    v1 = Number(
      ColorValMap.get(
        document.getElementById("color1").style.getPropertyValue("background")
      )
    );
    v2 = Number(
      ColorValMap.get(
        document.getElementById("color2").style.getPropertyValue("background")
      )
    );
    v3 = Number(
      ColorValMap.get(
        document.getElementById("color3").style.getPropertyValue("background")
      )
    );
    v4 = Number(
      ColorValMap.get(
        document.getElementById("color4").style.getPropertyValue("background")
      )
    );
    // console.log(v1);
    // console.log(v2);
    // console.log(v3);
    // console.log(v4);
    if ((isNaN(v1), isNaN(v2), isNaN(v3), isNaN(v4))) {
      // console.log('any of the four values is not defined hence value cannot be defined');
      return;
    }

    value1 = (v1 * 10 + v2) * Math.pow(10, v3);
    value1 = value1 - v4 * (value1 / 100);
    value2 = (v1 * 10 + v2) * Math.pow(10, v3);
    value2 = value2 + v4 * (value2 / 100);
    value = (v1 * 10 + v2) * Math.pow(10, v3);

    unit = getUnit(value);

    setVal1(value1);
    setVal2(value2);
    setVal(value);
  };

  const onsubmits = (event) => {
    changeValue();
    event.preventDefault();
  };

  return (
    <>
      <div id="header">
        <h3>ResDec</h3>
      </div>
      <div className="containerDiv">
        <div className="colorContainer">
          <div className="leftColorDiv"></div>
          <div className="mainColorDiv">
            <div id="color1" className="colorDiv"></div>
            <div id="color2" className="colorDiv"></div>
            <div id="color3" className="colorDiv"></div>
            <div id="color4" className="colorDiv"></div>
          </div>
          <div className="rightColorDiv"></div>
        </div>
        <div className="inputForm">
          <div id="displayValDiv">
            <div id="displayValDiv1">
              <h1>
                {val} {unit}&#x3A9;
              </h1>
            </div>
            <div id="displayValDiv2">
              <h2>
                {val1} {unit}&#x3A9;
              </h2>
              <h2> - </h2>
              <h2>
                {val2} {unit}&#x3A9;
              </h2>
            </div>
          </div>
          <form onSubmit={onsubmits}>
            <ColorBand
              key="1"
              heading="Digit 1"
              divId="color1Div"
              idBut1="col1"
              className="selectColor1"
            />
            <ColorBand
              key="2"
              heading="Digit 2"
              divId="color2Div"
              idBut1="col2"
              className="selectColor2"
            />
            <ColorBand
              key="3"
              heading="Multiplier"
              divId="color3Div"
              idBut1="col3"
              className="selectColor3"
            />
            <ColorBand2
              key="4"
              heading="Tolerance"
              divId="color4Div"
              className="selectColor4"
            />
          </form>
        </div>
      </div>
      <div id="footer">
        <a
          href="https://www.linkedin.com/in/shiv-gupta-588507228/"
          target="_blank"
        >
          &#169; All Copyrights Reserved
        </a>
      </div>
    </>
  );
};

export default App;
