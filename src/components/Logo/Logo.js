import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 50px;

    img {
        margin-right: 10px;
    }
`

const Logo = () => {
    return (
        <LogoWrapper>
            <img src={logo} alt="logo"/>
            <p><strong>Alura</strong>Books</p>
        </LogoWrapper>
    )
}

export default Logo