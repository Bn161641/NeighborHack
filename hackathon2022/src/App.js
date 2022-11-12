import logo from './logo.svg';
import {Route, Routes} from "react-router-dom"
import './App.css';
import { Home } from "./pages/Home";
import { Discover } from "./pages/Discover";
import { Profile } from "./pages/Profile";
import { Navar } from "./components/Navbar"
import { Group } from "./components/Group"

function App() {
  return (
    <div className="App">
      <Navar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </div>
  );
}

export default App;
<Route path="/" element={<Home />} />