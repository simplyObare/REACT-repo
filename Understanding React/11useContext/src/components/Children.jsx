import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

const Children = () => {
  return (
    <div className="children">
      <h2>Children</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  )
}

export default Children
