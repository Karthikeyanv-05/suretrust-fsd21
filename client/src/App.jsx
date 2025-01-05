import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import PrivacyPolicy from "./pages/privacy"
import TermsConditions from "./components/terms"
import Register from "./components/register"
import Login from "./components/login.jsx"
import Authenticate from "./components/Auth"
import Tnpsc from "./pages/tnpsc"
import UPSCPage from "./pages/upsc"
import  SSCPage from "./pages/ssc"
import RRB from "./pages/rrb"
import DefenceRecruitmentPage from "./pages/defence"
import TNSDCPage from "./pages/tnsdc.jsx"
import PMKVYPage from "./pages/pmkvy.jsx"
export default function App() {
  return (
     <>
        <Router>
          <switch>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<Authenticate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rrb" element={<RRB/>}/>
            <Route path="/tnpsc" element={<Tnpsc/>}/>
            <Route path="/upsc" element={<UPSCPage/>}/>
            <Route path="/ssc" element={<SSCPage/>}/>
            <Route path="/defence" element={<DefenceRecruitmentPage/>}/> 
            <Route path="tnsdc" element={<TNSDCPage/>}/>
            <Route path="pmkvy" element={<PMKVYPage/>}/>

          </Routes>
          </switch>
          
        </Router>
     </>
  )
}
  