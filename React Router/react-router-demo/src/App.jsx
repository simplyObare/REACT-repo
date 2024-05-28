import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeatureProducts from './components/FeatureProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import AuthProvider from './components/AuthProvider'
import LogIn from './components/LogIn'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<p>Loading...</p>}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="product" element={<Products />}>
          <Route index element={<FeatureProducts />} />
          <Route path="features" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
