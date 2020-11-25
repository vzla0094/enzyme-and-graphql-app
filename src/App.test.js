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

  it("should add first and second numbers", () => {
    firstNumber.simulate("change", {
      target: { name: "firstNumber", value: 5 },
    })
    secondNumber.simulate("change", {
      target: { name: "secondNumber", value: 10 },
    })
    // ALWAYS RE-FIND after anything changes (simulate)!
    // https://github.com/enzymejs/enzyme/issues/1757#issuecomment-416669094
    const firstNumberValue = wrapper.find("input[name='firstNumber']").props()
      .value
    const secondNumberValue = wrapper.find("input[name='secondNumber']").props()
      .value

    const addButton = wrapper.find(Button)
    addButton.simulate("click")
    result = parseInt(wrapper.find("#result").props().children)

    expect(result).toEqual(firstNumberValue + secondNumberValue)
  })

  it("should throw error alert if no numbers were entered", () => {
    firstNumber.simulate("change", {
      target: { name: "firstNumber", value: "" },
    })
    secondNumber.simulate("change", {
      target: { name: "secondNumber", value: "" },
    })

    const addButton = wrapper.find(Button)
    addButton.simulate("click")
    result = wrapper.find("#result").props().children

    expect(result).toEqual("Please specify numbers to add!")
  })
})

//Testing styled components
// https://github.com/styled-components/styled-components/issues/896
