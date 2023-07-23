import { styled } from "styled-components"
import Header from "./components/header"
import Summary from "./components/summary"

function App() {
  return (
    <CenterBox>

        <Direction>
          <Header />
          <Summary />
        </Direction>

    </CenterBox>
  )
}

export default App

const CenterBox = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ECF2FF;
`
const Direction = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    @media (min-width: 736px) {
      flex-direction: row;
      border-radius: 3.2rem;
  }
`