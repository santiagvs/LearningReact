import './App.css';
import { useState } from 'react'
import Inter from './assets/inter milan.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';

function App() {
  const [userName] = useState('Maria')

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
      <ConditionalRender />
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
