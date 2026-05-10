import "./App.css";
import useScrollGradient from './hooks/useScrollGradient';
import TopSignupBar from "./components/TopSignupBar";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomPage";
import SignInPage from "./pages/SignInPage";
import JavaScriptCourses from "./pages/JavaScriptCourses";
import CommandLine from "./pages/CommandLine";
import GitGuide from "./pages/GitGuide";
import DockerOverview from "./pages/DockerOverview";
import DevOpsOverview from "./pages/DevOpsEngineer";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard/UserSignin";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  useScrollGradient();
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  return (
    <>
      {/* Show TopSignupBar only if not on /signin */}
      {!isSignIn && <TopSignupBar />}

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
          <Route path="/support" element={<Support />} />
          <Route path="/javascript" element={<JavaScriptCourses />} />
          <Route path="/commandLine" element={<CommandLine/>} />
          <Route path="/gitguide" element={<GitGuide/>} />
          <Route path="/docker" element={<DockerOverview/>} />
          <Route path="/devops" element={<DevOpsOverview/>} />
          <Route path="/usersignin" element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
