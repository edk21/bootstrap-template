import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import { Stack } from "react-bootstrap"
function App() {
  return (
    <Stack className="mx-5 d-flex align-items-center justify-content-center">
      <NavBar />  
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;
