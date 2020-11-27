import { render, screen } from "@testing-library/react"
import App, { Button } from "./App"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

it("should render App without crashing", () => {
  shallow(<App />)
})

describe("<Button/>", () => {
  const wrapper = shallow(<App></App>)

  const changeInputValues = (action) => {
    const inputs = wrapper.find("input")
    inputs.map((input) => {
      input.simulate("change", {
        target: {
          name: input.prop("name"),
          value: action === "empty" ? "" : Math.round(Math.random() * 100),
        },
      })
    })
  }

  const getInputSum = () => {
    const inputs = wrapper.find("input")
    return inputs.reduce(
      (accumulator, input) => accumulator + input.prop("value"),
      0
    )
  }

  const clickAddButton = () => {
    const addButton = wrapper.find(Button)
    addButton.simulate("click")
  }

  const getDisplayedResult = () => {
    const result = wrapper.find("#result").props().children
    return parseInt(result) || result
  }

  it("should add first and second numbers", () => {
    changeInputValues()
    clickAddButton()

    expect(getDisplayedResult()).toEqual(getInputSum())
  })

  it("should alert user if no numbers were entered", () => {
    changeInputValues("empty")
    clickAddButton()

    expect(getDisplayedResult()).toEqual("Please specify numbers to add!")
  })

  it("should add the previous calculation and the current one", () => {
    changeInputValues()
    clickAddButton()
    const previousResult = getDisplayedResult()

    clickAddButton()
    const currentResult = getDisplayedResult()

    expect(currentResult).toEqual(previousResult + getInputSum())
  })
})

//Testing styled components
// https://github.com/styled-components/styled-components/issues/896
