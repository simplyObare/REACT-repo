import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required('full name required'),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(12).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    console.log('form submitted')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter name" {...register('name')} />
      <p>{errors.name?.message}</p>
      <input type="email" placeholder="email" {...register('email')} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="age" {...register('age')} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="******" {...register('password')} />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="confirm password"
        {...register('confirmPassword')}
      />
      <p>{errors.confirmPassword?.message}</p>
      <button>Submit</button>
    </form>
  )
}

export default Form
