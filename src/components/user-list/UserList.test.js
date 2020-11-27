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

  it("should render a title <h2 class='title'>Users:</h2>", async () => {
    const wrapper = mount(UserListWrapped)

    await waitFor(() => {
      wrapper.update()
      const title = wrapper.find("h2[className='title']").text()
      expect(title).toContain("Users:")
    })
  })

  it("should render 10 names inside <p class='user'/> elements", async () => {
    const wrapper = mount(UserListWrapped)

    await waitFor(() => {
      wrapper.update()
      const users = wrapper.find("p[className='user']")
      expect(users).toHaveLength(10)
    })
  })
})
