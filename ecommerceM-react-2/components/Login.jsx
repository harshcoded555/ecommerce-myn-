import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import "../styles/Login.css";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      dispatch(authActions.loginFailure("Please fill in all fields"));
      return;
    }

    dispatch(authActions.setLoading(true));

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(
          authActions.loginSuccess({ token: data.token, user: data.user })
        );
        setUsername("");
        setPassword("");
        if (onLoginSuccess) onLoginSuccess();
      } else {
        dispatch(authActions.loginFailure(data.message));
      }
    } catch (err) {
      dispatch(authActions.loginFailure("Failed to login. Please try again."));
    } finally {
      dispatch(authActions.setLoading(false));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>ecommerceM Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              disabled={isLoading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <p className="demo-credentials">
            <strong>Demo Credentials:</strong>
            <br />
            Username: user1 | Password: password123
            <br />
            Username: user2 | Password: password456
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;