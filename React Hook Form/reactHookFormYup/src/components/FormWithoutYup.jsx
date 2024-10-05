

function FormWithoutYup() {
   const [formData,setFormData]=useState({
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      password:'',
      confirmPassword:'',
      age:'',
      gender:'',
      interest:[],
      birthDate:'',
   })

const handleSubmit=()=>{}
   
   return (
    <form onSubmit={handleSubmit}>
      <div>
         <label>First Name: </label>
         <input type="text" name="firstName" value={formData.firstName} placeholder="Enter your first name" />
      </div>

      <div>
         <label>Last Name: </label>
         <input type="text" name="lastName" value={formData.lastName} placeholder="Enter your last name" />
      </div>

      <div>
         <label>Email: </label>
         <input type="email" name="email" value={formData.email} placeholder="Enter your email address" />
      </div>

      <div>
         <label>Phone Number: </label>
         <input type="text" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter your phone number" />
      </div>

      <div>
         <label>Password: </label>
         <input type="password" name="password" value={formData.password} placeholder="Enter your password" />
      </div>

      <div>
         <label>Confirm Password: </label>
         <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm your password" />
      </div>

      <div>
         <label>Age: </label>
         <input type="number" name="age" value={formData.age} placeholder="Enter your age" />
      </div>

      <div>
         <label>Gender</label>
         <select name="gender" value={formData.gender} onChange={}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
         </select>
      </div>

      <div>
         <label>Interest</label>
         <label >
            <input type="checkbox" name="coding" checked={formData.interest.includes('coding')} />
            Coding
         </label>
         <label >
            <input type="checkbox" name="sports" checked={formData.interest.includes('sports')} />
            Sports
         </label>
         <label >
            <input type="checkbox" name="reading" checked={formData.interest.includes('reading')} />
            Reading
         </label>
      </div>

      <div>
         <label >Date of Birth:</label>
         <input type="text" name='birthDate' value={FormData.birthDate} placeholder="Enter your date of birth" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormWithoutYup
