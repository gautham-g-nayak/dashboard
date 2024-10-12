import React, { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import RightBar from "./components/RightBar/RightBar";
import LeftBar from "./components/LeftBar/LeftBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderList from "./pages/OrderList/OrderList";
import Default from "./pages/Default/Default";

const App: React.FC = () => {
  const { theme } = useTheme();
  const [showRightBar, setShowRightBar] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("rightBar");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  const [showLeftBar, setShowLeftBar] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("LeftBar");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  const toggleRightBar = () => {
    const value: boolean = !showRightBar;
    setShowRightBar(value);
    localStorage.setItem("rightBar", JSON.stringify(value));
  };

  const toggleLeftBar = () => {
    const value: boolean = !showLeftBar;
    setShowLeftBar(value);
    localStorage.setItem("LeftBar", JSON.stringify(value));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
    },
    {
      path: "orderlist",
      element: <OrderList />,
    },
    {
      path: "*",
      element: <Default />,
    },
  ]);

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
  }, [theme]);

  return (
    <div className="App">
      {showLeftBar && <LeftBar />}
      <div style={{ flexGrow: 1 }}>
        <AppHeader
          toggleRightBar={toggleRightBar}
          toggleLeftBar={toggleLeftBar}
        />
        <RouterProvider router={router} />
      </div>

      {showRightBar && <RightBar />}
    </div>
  );
};

export default function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
