import React, { createContext, useState, useContext, ReactNode } from "react";

// SideBarContext interface
interface SideBarContextProps {
  showLeftBar: boolean;
  showRightBar: boolean;
  toggleRightBar: () => void;
  toggleLeftBar: () => void;
}

const SideBarContext = createContext<SideBarContextProps | undefined>(
  undefined
);

// SideBarProvider props interface
interface SideBarProviderProps {
  children: ReactNode;
}

export const SideBarProvider: React.FC<SideBarProviderProps> = ({
  children,
}) => {
  const [showLeftBar, setShowLeftBar] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("LeftBar");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  const [showRightBar, setShowRightBar] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("rightBar");
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

  return (
    <SideBarContext.Provider
      value={{ toggleLeftBar, toggleRightBar, showLeftBar, showRightBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = (): SideBarContextProps => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSideBar must be used within a SideBarProvider");
  }
  return context;
};
