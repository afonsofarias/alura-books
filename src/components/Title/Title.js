import styled from 'styled-components'

const Title = styled.h1`
    color: ${props => props.color || '#FFF'};
    font-size: ${props => props.fontSize || '36px'};
    text-align: ${props => props.textAlign || 'center'};
    width: 100%;
`

export default Title