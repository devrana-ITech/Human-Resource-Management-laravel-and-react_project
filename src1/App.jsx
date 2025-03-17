import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Purchase from "./pages/Purchase";


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
        <LeftSidebar/>
          <Routes>
              <Route path="/" element={<HomePage/>} >
                  <Route index element={<Index/>} />
                  <Route path="/purchase" element={<Purchase/>} />
              </Route>
          </Routes>
        <RightSidebar/>
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
