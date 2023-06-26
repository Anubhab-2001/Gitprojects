
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './COMPONENTS/Demo';
import Carousel from './COMPONENTS/Carousel';
import Banner from './COMPONENTS/Carousel';
import './App.css'
import Login from './COMPONENTS/login';
import SignUp from './COMPONENTS/signup';
import {Routes,Route} from 'react-router-dom'; 
import API from './COMPONENTS/API'

function App() {
 

  return (
    <>
    <API />
    {/* <Demo/>
    <Routes>
    <Route path="/Login" element={<Login/> }/>
     <Route path="/Carousel" element={<Carousel /> }/>
     <Route path="/signup" element={<SignUp/> }/>
     <Route path="/API" element={<API/> }/>
    </Routes> */}
     
    </>
  )
}

export default App
 