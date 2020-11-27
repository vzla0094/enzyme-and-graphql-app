import UserList from "./UserList"

import { render } from "enzyme"

describe("<UserList/>", () => {
  const wrapper = render(<UserList />)

  it("should render a title <h2 class='title'>Users:</h2>", () => {
    expect(wrapper.find("h2[class='title']").prop("value")).toEqual("Users:")
  })

  it("should render 10 names inside <p class='user'/> elements", () => {
    expect(wrapper.find("p[class='user']")).toHaveLength(10)
  })
})
