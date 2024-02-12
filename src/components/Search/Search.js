import { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import Title from '../Title/Title'
import searchData from './SearchData.json'

const SearchWrapper = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
`

const Search = () => {
    const [searchedBooks, setSearchedBooks]  = useState([])

    const handleInputChange = event => {
        setSearchedBooks(searchData.filter(book => book.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <SearchWrapper>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre em nossa estante o que precisa para seu desenvolvimento!</Subtitle>
            <Input
                placeholder='Qual será a proxima leitura'
                onBlur={handleInputChange}
            />
            {searchedBooks.map( book => (
                <Result>{`${book.name} - ${book.author}`}</Result>
            ) )}
        </SearchWrapper>
    )
}

export default Search