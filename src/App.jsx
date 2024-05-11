import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componentes/Footer'
import Footer from './componentes/Footer'
import Login from './componentes/Login'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </>
  )
}

export default App
