/* eslint-disable react/prop-types */
import { createContext } from 'react'

export const AppContext = createContext()

const ContextProvider = (props) => {
  const phone = '+1 01234567'
  const name = 'Obare'

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider
