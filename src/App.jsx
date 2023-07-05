import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components'

import { Home, About, Error, SingleCocktail } from './pages'


function App() {

  return (
    <Router>
      <Navbar currentPage={window.location.pathname} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
