import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Main from '../../pages/main/main'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='main' element={<Main />} />
      </Route>
    </Routes>
  )
}
