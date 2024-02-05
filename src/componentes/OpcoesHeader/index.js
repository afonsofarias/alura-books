const textoOpcoes = ['CATEGORIAS','MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map( (texto) => (
                <li className='opcao'>
                    <p>{texto}</p>
                </li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeader