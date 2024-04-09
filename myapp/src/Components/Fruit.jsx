export default function Fruit(props) {
  return (
    <>
      <li>
        {props.emoji} {props.name} - ${props.price}{' '}
        {props.soldout ? '(SOLD OUT)' : ''}
      </li>
      {/* {props.price > 10 ? (
        <li>
          {props.emoji} {props.name} - ${props.price}
        </li>
      ) : (
        ''
      )} */}
    </>
  )
}
