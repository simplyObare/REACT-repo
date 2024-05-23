import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>

      <button>
        <NavLink to={'/'}>Home</NavLink>
      </button>

      <button>
        <NavLink to={'/profile'}>Profile</NavLink>
      </button>

      <button>
        <NavLink to={'/contact'}>Contact</NavLink>
      </button>
    </div>
  )
}

export default Navbar
