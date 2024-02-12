import styled from 'styled-components'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import NewReleases from './components/NewReleases/NewReleases'
import Search from './components/Search/Search'

const AppWrapper = styled.body`
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
      <AppWrapper>
        <HeaderMenu />
        <Search />
        <NewReleases />
      </AppWrapper>
  )
}

export default App
