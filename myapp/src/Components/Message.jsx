const Message = () => {
  function handelClick() {
    console.log('Hello World')
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handelClick}>Click Me</button>
    </div>
  )
}

export default Message
