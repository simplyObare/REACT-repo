import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Navbar = () => {
  const auth = useAuth()

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  )
}

export default Navbar
