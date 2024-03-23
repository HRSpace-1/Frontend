import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Main from '../../pages/main/main'
import RecruiterPayForm from '../../pages/recruiter-pay-form/recruiter-pay-form'
import JobCreateForm from '../../pages/job-create-form/job-create-form'
import ConditionsForm from '../../pages/conditions-form/conditions-form'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='main' element={<Main />}>
          <Route path='vacancy' element={<JobCreateForm />} />
          <Route path='recruter-pay' element={<RecruiterPayForm />} />
          <Route path='conditions' element={<ConditionsForm />} />
        </Route>
      </Route>
    </Routes>
  )
}
