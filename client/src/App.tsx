import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route, redirect, Navigate, useLocation,  } from 'react-router-dom';
import NotFound from './views/NotFound/NotFound';
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector } from './store/hook';
import { newUser } from './store/Reducers/User/userSlice'
import { RootState } from './store/store';
import Chat from './views/Chat/Chat';
function App() {
  const user = useAppSelector((state: RootState) => state.user)


  return (
      <BrowserRouter>
        {/* <Navbar /> */}
        {user.name !== "" && <Navbar/>}
          <Routes>
            {user.name == "" && <Route path="/" element={<Home />} />}
            {user.name !== "" && <Route path="/" element={<Navigate to="/chat" />} />  }
            {user.name == "" && <Route path="/chat" element={<Navigate to="/" />} />  }
            <Route path="/chat" element={<Chat />} />
            <Route element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Switcher/>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
