
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './assets/Home'
import Result from './assets/Result'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
