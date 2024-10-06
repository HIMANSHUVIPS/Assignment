import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./App.module.css";
import Form from "./Components/FormControl/Form";
import PostList from "./Components/PostList/PostList";
import PostListProvider from "./Store/PostListStore";
import { Outlet } from "react-router-dom";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <>
      <PostListProvider>
        <div className={styles.app_content}>
          <button 
            className={`btn btn-primary ${styles.toggleButton}`} 
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
          {isSidebarOpen && (
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          )}
          <div className={styles.content}>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default App;
