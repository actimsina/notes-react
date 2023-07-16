import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './utils/authContext';
import Dashboard from './components/Dashboard';
import { RequireAuth } from './utils/RequireAuth';
import Profile from './components/Profile';


function App() {
  return (
    <div className='container'>
      <h1 className='text-center'>Notes App</h1>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
