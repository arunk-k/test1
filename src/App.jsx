// import './bootstrap.min.css'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent"
import EditStudent from "./pages/EditStudent"

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/add'} element={<AddStudent />} />
        <Route path={'/edit'} element={<EditStudent />} />
      </Routes>
    </>
  ) 
}

export default App 
