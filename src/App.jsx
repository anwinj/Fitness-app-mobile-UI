import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreen1 from './pages/SplashScreen1'
import SplashScreen2 from './pages/SplashScreen2'
import Register from './pages/Register'
import Login from './pages/Login'
import Goals from './pages/Goals'
import WorkoutTracker from './pages/WorkoutTracker'
import WorkoutSchedule from './pages/WorkoutSchedule'

function App() {

  return (
    <>
     <Routes>
      <Route path='/splash-1' element={<SplashScreen1/>} />
      <Route path='/splash-2' element={<SplashScreen2/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/goals' element={<Goals/>} />
      <Route path='/tracker' element={<WorkoutTracker/>} />
      <Route path='/schedule' element={<WorkoutSchedule/>} />
      <Route path='/*' element={<Navigate to={'/splash-1'} />} />
     </Routes>
    </>
  )
}

export default App
