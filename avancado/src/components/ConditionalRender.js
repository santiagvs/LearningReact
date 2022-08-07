import {useState} from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState('Pedro')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Sim, porque x é true</p>}
      {!x && <p>Agora x é falso</p>}

      {name === 'João' ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
      <button onClick={() => setName('João')}>Mude o nome aqui</button>
    </div>
  )
}

export default ConditionalRender
