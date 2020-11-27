import App from "./App"
import { shallow } from "enzyme"

it("should render App without crashing", () => {
  shallow(<App />)
})
