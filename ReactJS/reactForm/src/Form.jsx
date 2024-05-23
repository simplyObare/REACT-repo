import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('please enter your full name'),
    email: yup.string().email().required('please enter your email'),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required('please enter your age'),
    password: yup
      .string()
      .min(8)
      .max(12)
      .required('please enter your password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        width: '300px',
        gap: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f8f8f8',
      }}
    >
      <input type="text" placeholder="Full Name" {...register('fullName')} />{' '}
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register('email')} />{' '}
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register('age')} />{' '}
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password"
        {...register('password')}
      />{' '}
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />{' '}
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  )
}

export default Form
