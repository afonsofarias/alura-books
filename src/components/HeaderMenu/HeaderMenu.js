import Logo from '../Logo/Logo'
import MenuOptions from '../MenuOptions/MenuOptions'
import HeaderIcons from '../HeaderIcons/HeaderIcons'
import styled from 'styled-components'

const HeaderWrapper = styled.nav`
    align-items: center;
    background-color: #FFF;
    display: flex;
    height: 80px;
    justify-content: center;
    width: 100%;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <MenuOptions />
            <HeaderIcons />
        </HeaderWrapper>
    )
}

export default Header