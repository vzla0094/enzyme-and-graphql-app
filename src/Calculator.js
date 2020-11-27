import { useState } from "react"
import styled from "styled-components"

export const Button = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const Result = styled.div`
  background-color: black;
  padding: 0.25em 3em;
`

const addNumbers = (a, b, prevResult) => {
  if (!a || !b) return

  const aInt = parseInt(a)
  const bInt = parseInt(b)
  const prevResultInt = parseInt(prevResult)

  return aInt + bInt + (!!prevResultInt && prevResultInt)
}

const Calculator = () => {
  const missingInputValueMessage = "Please specify numbers to add!"
  const [values, setValues] = useState({
    firstInput: "",
    secondInput: "",
    result: missingInputValueMessage,
  })

  const changeNumbers = (inputName, value) => {
    setValues((prevState) => ({
      ...prevState,
      [inputName]: value,
      ...(!value && { result: missingInputValueMessage }),
    }))
  }
  return (
    <>
      <input
        name="firstInput"
        type="number"
        placeholder="enter a number"
        value={values.firstInput}
        onChange={(event) =>
          changeNumbers(event.target.name, event.target.value)
        }
      ></input>
      <input
        name="secondInput"
        type="number"
        placeholder="enter a number"
        value={values.secondInput}
        onChange={(event) =>
          changeNumbers(event.target.name, event.target.value)
        }
      ></input>
      <Button
        onClick={() =>
          changeNumbers(
            "result",
            addNumbers(values.firstInput, values.secondInput, values.result)
          )
        }
      >
        Add the numbers
      </Button>
      <Result>
        <h4>Result:</h4>
        <p id="result">{values.result}</p>
      </Result>
    </>
  )
}

export default Calculator
