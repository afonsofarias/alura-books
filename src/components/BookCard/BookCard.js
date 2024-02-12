import styled from 'styled-components'
import Card from '../Card/Card'
import Title from '../Title/Title'

const BookName = styled.p`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const About = styled.p`
    max-width: 300px;
`

const Button = styled.a`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }
`

const BookImg = styled.img`
    width: 150px;
`

const TextColumn = styled.div`
    align-self: start;
`

const BookCard = ({title, name, about, imgSrc}) => {
    return (
        <Card>
            <TextColumn>
                <Title fontSize='16px' color='#EB9B00' textAlign='left'>
                    {title}
                </Title>
                <BookName>
                    {name}
                </BookName>
                <About>
                    {about}
                </About>
            </TextColumn>
            <div>
                <BookImg src={imgSrc}/>
                <Button>

                    Saiba Mais
                </Button>
            </div>
        </Card>
    )
}

export default BookCard