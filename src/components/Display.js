import React, { useState } from "react";
import "./Display.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Display = () => {
  const [Number1, SetNumber1] = useState();
  const [operations, SetOperations] = useState();
  const [Number2, SetNumber2] = useState("");

  /**
   * For values/number
   */
  function handleclick(e) {
    if (!Number1 && !operations) {
      SetNumber1(e.target.value);
    } else if (Number1 && !operations) {
      let number = Number1 + e.target.value;
      SetNumber1(number);
    } else if (Number1 && operations) {
      let number2 = Number2 + e.target.value;
      SetNumber2(number2);
    }
  }
  /**
   * For Delete Numbers
   */
  function handleDelete() {
    SetNumber2("");
    SetNumber1("");
    SetOperations(null);
  }
  /**
   * To Store operation(with the help of this we r performing different operations using if condtion)
   *  and to display it in display div.
   */

  function handleOperations(e) {
    if (Number1) SetOperations(e.target.value);
  }
  /**
   * TO perform operations and to display result value
   */
  function handleEqual() {
    if (operations === "+") {
      let result = parseFloat(Number1) + parseFloat(Number2);
      SetNumber2("");
      SetNumber1(result);
      SetOperations(null);
    }
    if (operations === "-") {
      let result = parseFloat(Number1) - parseFloat(Number2);
      SetNumber2("");
      SetNumber1(result);
      SetOperations(null);
    }
    if (operations === "*") {
      let result = parseFloat(Number1) * parseFloat(Number2);
      SetNumber2("");
      SetNumber1(result);
      SetOperations(null);
    }
    if (operations === "/") {
      let result = parseFloat(Number1) / parseFloat(Number2);
      SetNumber2("");
      SetNumber1(result);
      SetOperations(null);
    }
    if (operations === "%") {
      let result = parseFloat(Number1) / 100;
      SetNumber2("");
      SetNumber1(result);
      SetOperations(null);
    }
  }
  /**
   * To asign +/- to number
   */
  function handleChangeSign() {
    if (Number1 && !Number2) {
      let num = -Number1;
      SetNumber1(num);
    } else if (Number1 && Number2) {
      let num2 = -Number2;
      SetNumber2(num2);
    }
  }

  console.log("1", Number1);
  console.log("2", Number2);

  return (
    <>
      <Container maxWidth="sm">
        <CssBaseline />
        <div className="display-box">
          <h1 className="number-display">
            {Number1} {operations} {Number2}
          </h1>
        </div>
        <Stack spacing={0} direction="row">
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleDelete}
            variant="contained"
          >
            AC
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleChangeSign}
            variant="contained"
          >
            +/-
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleOperations}
            value="%"
            variant="contained"
          >
            %
          </Button>
          <Button
            style={{ backgroundColor: "orange", color: "black" }}
            className="button"
            onClick={handleOperations}
            value="/"
            variant="contained"
          >
            /
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="7"
            variant="contained"
          >
            7
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="8"
            variant="contained"
          >
            8
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="9"
            variant="contained"
          >
            9
          </Button>
          <Button
            style={{ backgroundColor: "orange", color: "black" }}
            className="button"
            onClick={handleOperations}
            value="*"
            variant="contained"
          >
            *
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="4"
            variant="contained"
          >
            4
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="5"
            variant="contained"
          >
            5
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="6"
            variant="contained"
          >
            6
          </Button>
          <Button
            style={{ backgroundColor: "orange", color: "black" }}
            className="button"
            onClick={handleOperations}
            value="-"
            variant="contained"
          >
            -
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="3"
            variant="contained"
          >
            3
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="2"
            variant="contained"
          >
            2
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="1"
            variant="contained"
          >
            1
          </Button>
          <Button
            style={{ backgroundColor: "orange", color: "black" }}
            className="button"
            onClick={handleOperations}
            value="+"
            variant="contained"
          >
            +
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="0"
            variant="contained"
          >
            0
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            onClick={handleclick}
            value="."
            variant="contained"
          >
            .
          </Button>
          <Button
            style={{ backgroundColor: "lightgray", color: "black" }}
            className="button"
            variant="contained"
          ></Button>
          <Button
            style={{ backgroundColor: "orange", color: "black" }}
            className="button"
            onClick={handleEqual}
            variant="contained"
          >
            =
          </Button>
        </Stack>
      </Container>
    </>
  );
};
export default Display;
