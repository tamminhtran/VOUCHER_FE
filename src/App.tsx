import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/Errorpage.tsx";
import { Homepage } from "./pages/Homepage/Homepage.tsx";
const router = createBrowserRouter([
  {
    path: "/test",
    element: <h1>test</h1>,
  },
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,

  },
]);
function App() {
  return <div className="app">
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>;
}

export default App;
