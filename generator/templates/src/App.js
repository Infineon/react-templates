import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import TemplateLayout from './components/TemplateLayout/TemplateLayout'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
