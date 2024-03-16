import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  )
}
