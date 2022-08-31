import { useState } from 'react'
import { SignIn } from './pages/SignIn'

import './styles/global.scss';
function App() {
  const [count, setCount] = useState(0)

  return (
   <SignIn/>
  )
}

export default App
