import { Route, Routes } from 'react-router-dom';
import { Login } from './Layout/Login';

import { ChatPage2 } from './Layout/ChatPage2';
import Home from './Layout/Home'; // Import Home from your layout folder
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './index.css';
import SignupForm from './Layout/SignupForm';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar /> {/* Sidebar displayed on all pages */}
        <div style={{ marginLeft: '250px', flexGrow: 1 }}>
          <Routes>
            {/* Home Route */}
            <Route path="/home" element={<Home />} />  {/* Display Home component */}

            {/* Other routes */}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<ChatPage2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
