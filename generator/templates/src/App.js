import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import TemplateLayout from './components/TemplateLayout/TemplateLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateLayout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
