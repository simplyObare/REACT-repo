import './App.css'

function App() {
  const pets = [
    {
      name: 'Dolly',
      type: 'cat',
      description: 'Dolly is funny and loves to be around people',
      skills: ['fetch', 'play dead', 'roll over'],
      image:
        'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image:
        'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
    {
      name: 'Molly1',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image:
        'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
  ]

  return (
    <div>
      <h1>My Pets</h1>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        {pets.map((pet) => (
          <li key={pet.name} style={{ margin: '20px' }}>
            <div style={{ width: '200px' }}>
              <img src={pet.image} alt={pet.name} style={{ width: '100%' }} />
            </div>
            <h2>{pet.name}</h2>
            <p
              style={{
                width: '200px',
                wordWrap: 'break-word',
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              {pet.description}
            </p>
            <ol>
              <h2>Skills</h2>
              {pet.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
