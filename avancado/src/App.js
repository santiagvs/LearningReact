import './App.css';
import { useState } from 'react'
import Inter from './assets/inter milan.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails'

function App() {
  const [userName] = useState('Maria')

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'Kia', color: 'Verde', newCar: true, km: 43252},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 201200}
  ]

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
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={45000} color="Branco" newCar={true}/>
      <CarDetails brand="Ford" km={215432} color="Vermelho" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
