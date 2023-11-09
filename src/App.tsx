import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage.tsx";
import { Route, Routes } from "react-router-dom";
import { Profile } from "pages/Profile/Profile.tsx";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
