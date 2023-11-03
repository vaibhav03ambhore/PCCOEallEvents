import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import { BrowserRouter as BroweRouter, Routes, Route } from "react-router-dom"
import LoginG from './pages/LoginG';
import UserMenu from './pages/UserMenu';
import GTop from './components/Gtop';
import Bg from './components/Bg';
import EventForm from './pages/EventForm';


function App() {
  return (
    <BroweRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/Event' element={<Event />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/login' element={<LoginG />}></Route>
        <Route exact path='/user' element={<UserMenu />}></Route>
        <Route exact path='/EventForm' element={<EventForm />}></Route>
      </Routes>
      <GTop />
      <Bg />
    </BroweRouter>
  );
}

export default App;
