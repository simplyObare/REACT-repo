import { useState } from 'react'

const initialState = {
  name: '',
  city: '',
}

export default function Render() {
  const [formData, setFormData] = useState(initialState)
  console.log(formData)

  return (
    <div>
      <div>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <select
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          name="city"
          id=""
        >
          <option value={''} id="">
            Select City
          </option>
          <option value={'Mombasa'} id="Mombasa">
            Mombasa
          </option>
          <option value={'Kisumu'} id="Kisumu">
            Kisumu
          </option>
          <option value={'Nairobi'} id="Nairobi">
            Nairobi
          </option>
          <option value={'Thika'} id="Thika">
            Thika
          </option>
        </select>
        <div>
          <h3>
            Name is : {formData.name}
            <br />
            City is : {formData.city}
          </h3>
        </div>
      </div>
    </div>
  )
}
