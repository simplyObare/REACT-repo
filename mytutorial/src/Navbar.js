import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">Create New Block</a>
        </div>
      </nav>
    </div>
  )
}
