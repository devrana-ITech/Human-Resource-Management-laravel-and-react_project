import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import RightSideber from "./components/RightSideber"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import SetSalary from "./pages/payroll/SetSalary"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}> 
              <Route index element={<Index/>}/>
              <Route path="/setsalary" element={<SetSalary/>} />
              <Route path="/dashboard" element={<Dashboard/>}/> 
            </Route>
          </Routes>
        <RightSideber/>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
