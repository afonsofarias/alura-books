import livro from '../../imagens/livro.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export const livros = [
    {nome: 'Liderança em Design', id: 1, src:livro},
    {nome: 'Liderança em UX', id: 2, src:livro},
    {nome: 'JavaScript Assertivo', id: 3, src:livro},
 ]