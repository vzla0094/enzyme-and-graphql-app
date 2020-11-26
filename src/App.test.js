import { render, screen } from "@testing-library/react"
import App, { Button } from "./App"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

it("should render App without crashing", () => {
  shallow(<App />)
})

describe("<Button/>", () => {
  const wrapper = shallow(<App></App>)
  const firstInput = wrapper.find("input[name='firstInput']")
  const secondInput = wrapper.find("input[name='secondInput']")

  const fillInputValues = () => {
    firstInput.simulate("change", {
      target: { name: "firstInput", value: 5 },
    })
    secondInput.simulate("change", {
      target: { name: "secondInput", value: 10 },
    })
  }

  const emptyInputValues = () => {
    firstInput.simulate("change", {
      target: { name: "firstInput", value: "" },
    })
    secondInput.simulate("change", {
      target: { name: "secondInput", value: "" },
    })
  }

  const getInputSum = (inputName) => {
    const firstInputValue = wrapper.find("input[name='firstInput']").props()
      .value
    const secondInputValue = wrapper.find("input[name='secondInput']").props()
      .value

    return firstInputValue + secondInputValue
  }

  const clickAddButton = () => {
    const addButton = wrapper.find(Button)
    addButton.simulate("click")
  }

  it("should add first and second numbers", () => {
    fillInputValues()
    clickAddButton()
    const result = parseInt(wrapper.find("#result").props().children)

    expect(result).toEqual(getInputSum())
  })

  it("should alert user if no numbers were entered", () => {
    emptyInputValues()
    clickAddButton()
    const result = wrapper.find("#result").props().children

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
