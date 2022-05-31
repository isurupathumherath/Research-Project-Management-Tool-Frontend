import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// Import Routes
import Home from './Home';
import Register from './pages/student/register';
import AdminRegister from './pages/admin/register';
import AdminDashboard from './pages/admin/dashboard';
import AdminLogin from './pages/admin/login';
import SideMenu from './components/Admin/sideMenu';
import AddSubTypes from './components/Admin/add-subTypes';
import FileUpload from './components/Admin/fileUpload';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Home />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<SideMenu/>}/>
          <Route path='/subTypes' element={<AddSubTypes/>}/>
          <Route path='/fileUpload' element={<FileUpload/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
