import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./sidebar/sidebar.jsx";
import NavBtn from "./navBtn/navBtn.jsx";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavBtn onClick={handleMenuClick} isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
}

export default App;
