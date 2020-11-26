import { render, screen } from "@testing-library/react"
import App, { Button } from "./App"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

it("should render App without crashing", () => {
  shallow(<App />)
})

describe("<Button/>", () => {
  const wrapper = shallow(<App></App>)
  const firstNumber = wrapper.find("input[name='firstNumber']")
  const secondNumber = wrapper.find("input[name='secondNumber']")
  let result

  const fillInputValues = () => {
    firstNumber.simulate("change", {
      target: { name: "firstNumber", value: 5 },
    })
    secondNumber.simulate("change", {
      target: { name: "secondNumber", value: 10 },
    })
  }

  const emptyInputValues = () => {
    firstNumber.simulate("change", {
      target: { name: "firstNumber", value: "" },
    })
    secondNumber.simulate("change", {
      target: { name: "secondNumber", value: "" },
    })
  }

  const getInputSum = (inputName) => {
    const firstNumberValue = wrapper.find("input[name='firstNumber']").props()
      .value
    const secondNumberValue = wrapper.find("input[name='secondNumber']").props()
      .value

    return firstNumberValue + secondNumberValue
  }

  const clickAddButton = () => {
    const addButton = wrapper.find(Button)
    addButton.simulate("click")
  }

  it("should add first and second numbers", () => {
    fillInputValues()
    clickAddButton()
    result = parseInt(wrapper.find("#result").props().children)

    expect(result).toEqual(getInputSum())
  })

  it("should alert user if no numbers were entered", () => {
    emptyInputValues()
    clickAddButton()
    result = wrapper.find("#result").props().children

    expect(result).toEqual("Please specify numbers to add!")
  })

  it("should add the previous calculation and the current one", () => {
    fillInputValues()
    clickAddButton()
    const prevResult = parseInt(wrapper.find("#result").props().children)
    clickAddButton()
    const result = parseInt(wrapper.find("#result").props().children)

    expect(result).toEqual(prevResult + getInputSum())
  })
})

//Testing styled components
// https://github.com/styled-components/styled-components/issues/896
