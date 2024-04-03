import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Home, Success,  PageNotFount } from './Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/success' element={<Success/>}/>
    <Route path='*' element={<PageNotFount/>}/>
      </Routes>
      <Toaster/>
      
    </BrowserRouter>
  )
}

export default App
