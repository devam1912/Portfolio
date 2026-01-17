import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NotFound from "./pages/NotFound.jsx";
import Achievements from "./pages/Achievements.jsx";

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
    <>
      <ScrollToTop />
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
            path="/achievements"
            element={
              <FadeRoute>
                <Achievements />
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
          <Route path="*" element={<FadeRoute><NotFound /></FadeRoute>} />

        </Route>
      </Routes>
    </>
  );
}
