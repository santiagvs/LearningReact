const TemplateExpressions = () => {
  const name = 'Pedro'
  const data = {
    age: 31,
    job: 'Programmer'
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
    </div>
  )
}

export default TemplateExpressions
