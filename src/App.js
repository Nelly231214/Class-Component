import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Class from "./Components/Class"
import Hook from "./Components/Hook"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Class />} />
      <Route path="/hook" element={<Hook />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
