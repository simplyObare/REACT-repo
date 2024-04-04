import React from 'react'

function Home() {
  function btn() {
    console.log('Welcome')
  }
  return (
    <div>
      <div className="content">
        <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        eius consequatur laborum voluptates. Doloremque eos ratione ex deleniti
        eum soluta culpa, vero et a repellendus, obcaecati perferendis similique
        dicta itaque?
      </p>
        <button onClick={btn}>Click me</button>
      </div>
    </div>
  )
}

export default Home
