import styled from 'styled-components'

const BooksWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding: 75px 0;
    width: 70%;
`

const Books = ({booksData}) => {
    return (
        <BooksWrapper>
            { booksData.map( book => (
                <img src={book.src} alt={book.name} key={book.id} />
            ) ) }
        </BooksWrapper>
    )
}

export default Books