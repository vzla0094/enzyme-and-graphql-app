import { mount } from "enzyme"
import UserList from "./UserList"
import { mocks } from "./UserList.mocks"

import { MockedProvider } from "@apollo/client/testing"
import { waitFor } from "@testing-library/react"

describe("<UserList/>", () => {
  const UserListWrapped = (
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserList />
    </MockedProvider>
  )

  const wrapper = mount(UserListWrapped)

  beforeAll(async () => {
    await waitFor(() => {
      wrapper.update()
      expect(wrapper.exists(".loading")).toBeFalsy()
    })
  })

  it("should render a title <h2 class='title'>Users:</h2>", () => {
    expect(wrapper.find("h2[className='title']").text()).toContain("Users:")
  })

  it("should render 10 names inside <p class='user'/> elements", () => {
    expect(wrapper.find("p[className='user']")).toHaveLength(10)
  })
})
