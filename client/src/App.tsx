import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './views/Home/Home';
import Chat from './views/Chat/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './views/NotFound/NotFound';
import { useSelector, useDispatch } from 'react-redux'
import { newUser } from './store/Reducers/User/userSlice'
import { RootState } from './store/store';
function App() {
  const user = useSelector((state: RootState) => state.user)
  
  return (
    <>
      <BrowserRouter>
        {user.name !== "" && <Navbar/>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
    </>
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
