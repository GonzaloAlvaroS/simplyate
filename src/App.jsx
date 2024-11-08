import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useLocation } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import LineInfo from "./Components/LineInfo/LineInfo"
import Service1 from "./Components/Service1/Service1"
import ValuesHome from './Components/ValuesHome/ValuesHome';
import Service2 from "./Components/Service2/Service2"
import Service3 from "./Components/Service3/Service3"
import Service4 from "./Components/Service4/Service4";
import MissionHome from './Components/MissionHome/MissionHome';
import QuestionJoin from './Components/QuestionJoin/QuestionJoin';
import LowerPart from "./Components/LowerPart/LowerPart";

import InfoBusiness from "./Pages/WhoAreWe/InfoBusiness/InfoBusiness";
import Values from "./Pages/WhoAreWe/Values/Values";
import InfoBusiness2 from "./Pages/WhoAreWe/InfoBusiness2/InfoBusiness2";

import Explanation from "./Pages/HowDoesItWork/Explanation/Explanation";
import MethodOne from "./Pages/HowDoesItWork/MethodOne/MethodOne";
import MethodTwo from "./Pages/HowDoesItWork/MethodTwo/MethodTwo";
import MethodThree from "./Pages/HowDoesItWork/MethodThree/MethodThree";
import Conclusion from "./Pages/HowDoesItWork/Conclusion/Conclusion";

import Introduction from './Pages/HowToStart/Introduction/Introduction';
import Contact from './Pages/HowToStart/Contact/Contact';
import FAQQuestion from './Pages/HowToStart/FAQQuestion/FAQQuestion';

import FAQ from './Pages/FAQ/FAQ/FAQ';




function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ pathname ]); 

  return null;
}


const App = () => {

  return (
    <Router basename="/simplyate" future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
     <ScrollToTop/>
     <Navbar/>
     <Routes>
     <Route path="/" element={
     <div>
     <Home/>
     <LineInfo/>
     <Service1/>
     <ValuesHome/>
     <Service2/>
     <Service3/>
     <Service4/>
     <MissionHome/>
     <QuestionJoin/>
     </div>
     }/>
    <Route path="who-are-we" element={
    <div>
    <InfoBusiness/>
    <Values/>
    <InfoBusiness2/>
    </div>
     }/>
    <Route path="how-does-it-work" element={
    <div>
    <Explanation/>
    <MethodOne/>
    <MethodTwo/>
    <MethodThree/>
    <Conclusion/>
    </div>
     }/>
    <Route path="how-to-start" element={
    <div>
    <Introduction/>
    <Contact/>
    <FAQQuestion/>
    </div>
     }/>
    <Route path="FAQ" element={
    <div>
    <FAQ/>
    </div>
     }/>
   </Routes>
   <LowerPart/>
   </Router>
  )
}

export default App




