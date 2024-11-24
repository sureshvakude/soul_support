import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './Components/Login';
import PageTitle from './Components/PageTitle';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Book from './Pages/Book';
import Music from './Pages/Music';
import Quotes from './Pages/Quote';
import TherapyPage from './Pages/Therapy';

// PrivateRoute Component
function PrivateRoute({ children }) {
  const token = localStorage.getItem('soul_authToken');
  return token ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
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
              <Signup />
            </>
          }
        />
        {/* Private Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Navbar />
              <PageTitle title="Home - SoulSupport" />
              <Home />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Navbar />
              <PageTitle title="Books - SoulSupport" />
              <Book />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/musics"
          element={
            <PrivateRoute>
              <Navbar />
              <PageTitle title="Music - SoulSupport" />
              <Music />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/quotes"
          element={
            <PrivateRoute>
              <Navbar />
              <PageTitle title="Quotes - SoulSupport" />
              <Quotes />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/therapy"
          element={
            <PrivateRoute>
              <Navbar />
              <PageTitle title="Therapy - SoulSupport" />
              <TherapyPage />
              <Footer />
            </PrivateRoute>
          }
        />
        {/* Redirect unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
