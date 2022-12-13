import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/defaultLayout/DefaultLayout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <span className="hidden absolute top-0 -left-0 w-full h-full bg-white z-20 items-center justify-center sm:flex ">
          updating...
        </span>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
