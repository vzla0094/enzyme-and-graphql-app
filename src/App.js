/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css"
import styled from "styled-components"
import { useState } from "react"

export const AppContainer = styled.div`
  text-align: center;
`
export const Background = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
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

function App() {
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
    <AppContainer>
      <Background>
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
      </Background>
    </AppContainer>
  )
}

export default App
