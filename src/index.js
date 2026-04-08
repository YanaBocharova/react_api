import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // import provider
import reportWebVitals from './reportWebVitals';

const clientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"; // replace with your actual Google client ID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<GoogleOAuthProvider clientId="948341190298-o97a275grjt2dl4f9s68otmjdrhcimsr.apps.googleusercontent.com">
  <BrowserRouter>
    <App />
  </BrowserRouter>
</GoogleOAuthProvider>
);

reportWebVitals();
