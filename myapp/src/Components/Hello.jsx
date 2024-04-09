const Hello = (person) => {
  return (
    <div>
      <h1>
        Hello {person.name} {person.emoji} {person.message}
      </h1>
    </div>
  )
}

export default Hello
