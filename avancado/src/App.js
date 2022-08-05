import './App.css';
import Inter from './assets/inter milan.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/imagem.jpg" alt="Imagem sacra" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Inter} alt="inter" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
