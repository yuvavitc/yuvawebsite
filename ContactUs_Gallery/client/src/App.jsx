import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
// src/App.jsx
// function App() {
//   return (
//     <div className="text-white text-center mt-10 text-3xl">
//       Hello World 🌍! This is working!
//     </div>
//   );
// }

// export default App;
