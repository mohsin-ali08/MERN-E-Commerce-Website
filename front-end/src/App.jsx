import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner"; 

function App() {
  return (
    <BrowserRouter> 
    <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
