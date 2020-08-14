import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repository from "./pages/Repository";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:repository" element={<Repository />} />
        </Routes>
      {/* <Footer /> */}

      <GlobalStyles />
    </BrowserRouter>
      
  );
}

export default App;
