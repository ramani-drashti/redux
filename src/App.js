import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const [user, setUser] = useState(false);
  const {isLogin} = useSelector(state => state.rootReducer.userData)
  // // const u = localStorage.getItem("user");
  useEffect(() => {
    console.warn('ISLogin',isLogin);
    if (isLogin) {
      // navigator('/home')
      setUser(true);
    }else{
      // navigator('/login')
      setUser(false);
    }
  },[isLogin]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Routes> */}
          {user ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route
            path="*"
            element={user ? <Home /> : <Login />}
          ></Route>
            {/* <Route path="/" element={<Login />} /> */}
            {/* <Route  path="/header" element={<Header />} /> */}
            {/* <Route   path="/main" element={<Main />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

  export default App;
