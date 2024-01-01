import { useEffect, useState } from "react";
import { useAuthGlobally } from "../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// PrivateRoute Component
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuthGlobally();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check user authentication
    const authCheck = async () => {
      try {
        // Make a request to the server to check user authentication
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/user/user-auth`);
        
        // If authentication is successful, set 'ok' state to true
        if (response.data.ok) {
          setOk(true);
        } else {
          // If authentication fails, set 'ok' state to false, show error message, and redirect to login page
          setOk(false);
          toast.error(response.data.message);
          navigate("/login");
        }
      } catch (error) {
        // If an error occurs during the request, set 'ok' state to false, show appropriate error message
        setOk(false);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    };

    // Check if the user is authenticated (has a token)
    if (auth?.token) {
      authCheck(); // Perform authentication check
    } else {
      // If user is not authenticated, show error message and redirect to login page
    //   toast.error("For security reasons, please log in first.");
      toast.error("kindly log in first.");
      navigate("/login");
    }
  }, [auth?.token, navigate]);

  // Render the child components (Outlet) if authentication is successful, otherwise show "Loading..."
  return ok ? <Outlet /> : "Loading ...";
}
