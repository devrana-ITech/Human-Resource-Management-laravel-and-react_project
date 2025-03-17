import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import RightSideber from "./components/RightSideber"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import Purchase from "./pages/Purchase"
import ManageSupplier from "./pages/supplier/ManageSupplier"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}> 
              <Route index element={<Index/>}/>
              <Route path="/purchase" element={<Purchase/>} />
              <Route path="/managesupplier" element={<ManageSupplier/>} />
            </Route>
          </Routes>
        <RightSideber/>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
