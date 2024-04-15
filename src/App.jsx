import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Pagea from './components/Pagea'



function App() {
  

  return (
    
      <BrowserRouter>
   
      
   <Routes>

     <Route path="/" element={<Pagea/>}></Route>
   
     <Route path='/home' element={<Home/>}></Route>
          



   </Routes>
 </BrowserRouter>
    
  )
}

export default App
