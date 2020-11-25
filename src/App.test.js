import { render, screen } from "@testing-library/react"
import App, { Button } from "./App"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

it("should render App without crashing", () => {
  shallow(<App />)
})

let wrapper

beforeAll(() => {
  wrapper = shallow(<App></App>)
  const firstNumber = wrapper.find("input[name='firstNumber']")
  const secondNumber = wrapper.find("input[name='secondNumber']")
  firstNumber.simulate("change", {
    target: { name: "firstNumber", value: 5 },
  })
  secondNumber.simulate("change", {
    target: { name: "secondNumber", value: 10 },
  })
})

it("should add first and second numbers", () => {
  // ALWAYS RE-FIND after anything changes (simulate)!
  // https://github.com/enzymejs/enzyme/issues/1757#issuecomment-416669094
  const firstNumber = wrapper.find("input[name='firstNumber']")
  const secondNumber = wrapper.find("input[name='secondNumber']")
  const firstNumberValue = firstNumber.props().value
  const secondNumberValue = secondNumber.props().value

  const addButton = wrapper.find(Button)
  addButton.simulate("click")
  const result = parseInt(wrapper.find("#result").props().children)

  expect(result).toEqual(firstNumberValue + secondNumberValue)
})

//Testing styled components
// https://github.com/styled-components/styled-components/issues/896
