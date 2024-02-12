import { menuOptionsData } from './MenuOptionsData'
import styled from 'styled-components'

const OptionsContainer = styled.ul`
    display: flex;
    height: 100%;
    justify-content: center;
    margin-right: 50px;
`

const Option = styled.li`
    align-items: center;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: center;
    min-width: 120px;
    padding: 0 5px;
    text-align: center;

    &:hover {
        background: linear-gradient(90deg, #002F52 35%, #326589 130%);
        color: #FFF;
    }
`

const MenuOptions = () => {
    return (
        <OptionsContainer>
            { menuOptionsData.map( option => (
                <Option>
                    {option.text}
                </Option>
            ) ) }
        </OptionsContainer>
    )
}

export default MenuOptions