import { Outlet } from "react-router";
import BagItems from "../components/HomeIItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itemSlice, { itemActions } from "../store/itemSlice";
import Login from "../components/Login";

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
        const res = await fetch(`${API_URL}/items`, { signal: controller.signal });
        const data = await res.json();
        dispatch(itemActions.addInitialItems(data.items));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
        }
      }
    };

    // Only fetch items if user is authenticated
    if (token) {
      fetchData();
    }

    return () => controller.abort();
  }, [dispatch, token]);

  if (!token) {
    return <Login onLoginSuccess={() => setLoginSuccess(!loginSuccess)} />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;