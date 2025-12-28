import "./App.css";
import TopSignupBar from "./components/TopSignupBar";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomPage";
import EducationMenu from "./pages/EducationMenu";
import SignInPage from "./pages/SignInPage";
import JavaScriptCourses from "./pages/JavaScriptCourses";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  return (
    <>
      {/* Show TopSignupBar only if not on /signin */}
      {!isSignIn && <TopSignupBar />}

      {/* Optional: show menu only when not on signin */}
      {!isSignIn && <EducationMenu />}

      {/* Conditionally add padding only when not on /signin */}
      <div style={{ paddingTop: isSignIn ? "0" : "6rem" }}>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Footer />
                <BottomBar />
              </>
            }
          />

          {/* Sign in */}
          <Route path="/signin" element={<SignInPage />} />

          {/* JavaScript Courses Page */}
          <Route path="/javascript" element={<JavaScriptCourses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
