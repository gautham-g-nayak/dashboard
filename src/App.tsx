import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import RightBar from "./components/RightBar/RightBar";
import LeftBar from "./components/LeftBar/LeftBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderList from "./pages/OrderList/OrderList";
import Default from "./pages/Default/Default";
import { SideBarProvider, useSideBar } from "./context/SidebarContext";

const App: React.FC = () => {
  const { theme } = useTheme();
  const { showLeftBar, showRightBar } = useSideBar();

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
        <AppHeader />
        <RouterProvider router={router} />
      </div>

      {showRightBar && <RightBar />}
    </div>
  );
};

export default function ThemedApp() {
  return (
    <ThemeProvider>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </ThemeProvider>
  );
}
