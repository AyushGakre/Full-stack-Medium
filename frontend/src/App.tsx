import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/blog/:id' element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
  </>

  )
}

export default App