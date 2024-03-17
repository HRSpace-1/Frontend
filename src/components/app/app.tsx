import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Main from '../../pages/main/main'
import RecruiterPayForm from '../../pages/main/recruiter-pay-form/recruiter-pay-form'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='main' element={<Main />}>
          <Route path='form1' element={<RecruiterPayForm />} />
        </Route>
      </Route>
    </Routes>
  )
}
