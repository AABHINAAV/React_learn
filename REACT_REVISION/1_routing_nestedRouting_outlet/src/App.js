import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent1 from "./COMPONENTS/Parent1";
import Parent2 from "./COMPONENTS/Parent2";
import HomePage from "./COMPONENTS/HomePage";
import Child1 from "./COMPONENTS/CHILDS/Child1";
import Child2 from "./COMPONENTS/CHILDS/Child2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/Parent1" element={<Parent1></Parent1>}></Route>
          <Route path="/Parent2" element={<Parent2></Parent2>}>
            <Route path="Child1" element={<Child1></Child1>}></Route>
            <Route path="Child2" element={<Child2></Child2>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
