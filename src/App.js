import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/OpcoesHeader'
import IconesHeader from './componentes/IconesHeader'


const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App