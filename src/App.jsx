import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function FadeRoute({ children }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fadeIn">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route
          path="/"
          element={
            <FadeRoute>
              <Home />
            </FadeRoute>
          }
        />
        <Route
          path="/about"
          element={
            <FadeRoute>
              <About />
            </FadeRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <FadeRoute>
              <Projects />
            </FadeRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <FadeRoute>
              <Contact />
            </FadeRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
