import "./App.css";
import TopSignupBar from "./components/TopSignupBar";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomPage";
import { Routes, Route, useLocation } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

function App() {
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  return (
    <>
      {/* Show TopSignupBar only if not on /signin */}
      {!isSignIn && <TopSignupBar />}

      {/* Conditionally add padding only when not on /signin */}
      <div style={{ paddingTop: isSignIn ? "0" : "6rem" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Footer />
                <BottomBar />
              </>
            }
          />
          <Route path="/signin" element={<SignInPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
