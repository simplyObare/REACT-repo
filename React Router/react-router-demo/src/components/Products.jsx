import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <input type="search" name="" id="" placeholder="Search for product" />
      </div>
      <nav>
        <Link to="features">features</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Products
