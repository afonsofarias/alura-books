import styled from 'styled-components'
import BookCard from '../BookCard/BookCard'
import Books from '../Books/Books'
import Title from '../Title/Title'
import BookCardImg from '../../images/bookAngular.png'
import { booksData } from './booksData'

const NewReleasesWrapper = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
`

const Row = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
`

const NewReleases = () => {
    return (
        <NewReleasesWrapper>
            <Row>
                <Title color='#EB9B00' fontSize='26px'>
                    ÚLTIMOS LANCAMENTOS
                </Title>
            </Row>
            <Books booksData={booksData}/>
            <BookCard
                title='Talvez você também se interesse por...'
                name='Angular 11 e Firebase'
                about='Construindo uma aplicação integrada com a plataforma do Google.'
                imgSrc={BookCardImg}
            />
        </NewReleasesWrapper>
    )
}

export default NewReleases