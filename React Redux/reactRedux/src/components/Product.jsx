import { useState, useEffect } from 'react'

const Product = () => {
  const { data, setData } = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((result) => setData(result.products))
  })

  return (
    <>
      <div className="container">
        <div className="row">
          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <div key={index} className="card" style={{ width: '18rem' }}>
                  <img
                    src="item.thumbnail"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              )
            })
          ) : (
            <p>Loading Products</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Product
