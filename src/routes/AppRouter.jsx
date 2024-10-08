import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Error404 from '../pages/error/404'
import History from '../pages/history'
import Download from '../pages/download'
import ItemDetail from '../pages/history/Item'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Download' element={<Download />} />
        <Route path='/History' element={<History />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        {/* Página não encontrada */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
