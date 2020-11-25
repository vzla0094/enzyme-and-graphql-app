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

function App() {
  const [numbers, setNumbers] = useState({
    firstNumber: "",
    secondNumber: "",
  })

  const [result, setResult] = useState("")

  const addNumbers = (a, b) => {
    const aInt = parseInt(a)
    const bInt = parseInt(b)
    aInt && bInt
      ? setResult(aInt + bInt)
      : setResult("Please specify numbers to add!")
  }

  const changeNumbers = (number, value) => {
    setNumbers((prevState) => ({
      ...prevState,
      [number]: value,
    }))
  }

  return (
    <AppContainer>
      <Background>
        <input
          name="firstNumber"
          type="number"
          placeholder="enter a number"
          value={numbers.firstNumber}
          onChange={(event) =>
            changeNumbers(event.target.name, event.target.value)
          }
        ></input>
        <input
          name="secondNumber"
          type="number"
          placeholder="enter a number"
          value={numbers.secondNumber}
          onChange={(event) =>
            changeNumbers(event.target.name, event.target.value)
          }
        ></input>
        <Button
          onClick={() => addNumbers(numbers.firstNumber, numbers.secondNumber)}
        >
          Add the numbers
        </Button>
        <Result>
          <h4>Result:</h4>
          <p id="result">{result}</p>
        </Result>
      </Background>
    </AppContainer>
  )
}

export default App
