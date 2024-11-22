import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';


import Login from './Components/Login';
import PageTitle from './Components/PageTitle';
import Signup from './Components/Signup';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Login - SoulSupport" />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Signup - SoulSupport" />
              <Signup/>
            </>
          }
        />
         <Route
          path="/home"
          element={
            <>
              <PageTitle title="Home - SoulSupport" />
              <Home/>
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
