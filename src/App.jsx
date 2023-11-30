import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
