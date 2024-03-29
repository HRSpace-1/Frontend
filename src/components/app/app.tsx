import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from '../layout/layout'
import RecruiterPayForm from '../../pages/recruiter-pay-form/recruiter-pay-form'
import JobCreateForm from '../../pages/job-create-form/job-create-form'
import ConditionsForm from '../../pages/conditions-form/conditions-form'
import { useEffect } from 'react'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/conditions')
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='vacancy' element={<JobCreateForm />} />
        <Route path='recruiter-pay' element={<RecruiterPayForm />} />
        <Route path='conditions' element={<ConditionsForm />} />
      </Route>
    </Routes>
  )
}
