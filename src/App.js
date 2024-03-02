import { Route, Routes } from "react-router-dom";
import Home from "./Components/Hero/Home.jsx"
import './App.css'
function App() {
  return (
       <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
