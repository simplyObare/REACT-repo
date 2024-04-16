import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/818NA9ybYGL._SY425_.jpg',
    title: 'Bad Dreams in the Night',
    author: 'Adam Ellis',
    id: 1,
  },

  {
    img: 'https://m.media-amazon.com/images/I/81XP4hEXDXL._SY425_.jpg',
    title: 'The Anxious Generation',
    author: 'Jonathan Haidt',
    id: 2,
  },
]

// const author = 'Adam Ellis'
// const title = 'Bad Dreams in the Night'
// const img = 'https://m.media-amazon.com/images/I/818NA9ybYGL._SY425_.jpg'

export default function BookList() {
  return (
    <section className="booklist">
      {/* <Event /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

// const Event = () => {
//   function handleFormInput() {
//     console.log('input received')
//   }
//   function handleClick() {
//     alert('button clicked')
//   }

//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           onChange={handleFormInput}
//           type="text"
//           name="example"
//           style={{ margin: '1rem' }}
//         />
//       </form>
//       <button onClick={handleClick} style={{ margin: '1rem' }}>
//         Click Me
//       </button>
//     </section>
//   )
// }

const Book = (props) => {
  return (
    <article className="book">
      <img className="cover" src={props.img} alt="book cover" />
      <h2>{props.title}</h2>
      <button>click me</button>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
