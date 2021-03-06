/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css"
import styled from "styled-components"
import Calculator from "./components/calculator/Calculator"
import UserList from "./components/user-list/UserList"

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

function App() {
  return (
    <AppContainer>
      <Background>
        <UserList />
        <Calculator></Calculator>
      </Background>
    </AppContainer>
  )
}

export default App
