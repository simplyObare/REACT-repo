import Fruit from './Fruit'

function Fruits() {
  const fruits = [
    { name: 'apple', price: 10, emoji: '🍎', soldout: true },
    { name: 'pineapple', price: 20, emoji: '🍍', soldout: false },
    { name: 'melon', price: 15, emoji: '🍈', soldout: true },
    { name: 'banana', price: 20, emoji: '🍌', soldout: false },
    { name: 'lemon', price: 10, emoji: '🍋', soldout: true },
    { name: 'mango', price: 5, emoji: '🥭', soldout: false },
  ]

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruits.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  )
}

export default Fruits
