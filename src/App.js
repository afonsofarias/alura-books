import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul>
          <li><p>CATEGORIAS</p></li>
          <li><p>MINHA ESTANTE</p></li>
          <li><p>FAVORITOS</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App