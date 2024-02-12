import styled from 'styled-components'
import { headerIcons } from './IconsData'

const IconsWrapper = styled.ul`
    display: flex;
    justify-content: center;
`

const Icon = styled.li`
    margin-right: 65px;
    width: 25px;
`

const HeaderIcons = () => {
    return (
        <IconsWrapper>
            { headerIcons.map( icon => (
                <Icon>
                    <img
                        alt={icon.alt}
                        src={icon.src}
                    />
                </Icon>
            )) }
        </IconsWrapper>
    )
}

export default HeaderIcons