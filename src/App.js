import Cadastro from './components/cadastro/Cadastro';
import Historico from './components/historico/Historico';
import Logs from './components/logs/Logs';
import Menu from './components/menu/Menu';
import Moradores from './components/moradores/Moradores';


function App() {
  return (
    <div className="App">
      <Menu />
      <Logs /> 
      <Cadastro />
      <Historico />
      <Moradores />
    </div>
  );
}

export default App;
