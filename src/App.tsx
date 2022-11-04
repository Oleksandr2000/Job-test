import React from "react"
import { Route, Routes } from "react-router"
import { ToastContainer } from "react-toastify"

import Hamburger from "./components/Hamburger/Hamburger"
import Header from "./components/Header/Header"
import { publicRoutes } from "./routes"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <Header />
      <Hamburger />
      <Routes>
        {publicRoutes.map((route: any, i: number) => (
          <Route path={route.path} element={<route.element />} key={i} />
        ))}
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='colored'
      />
    </div>
  )
}

export default App
