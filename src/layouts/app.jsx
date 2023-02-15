import { Header } from "components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Popup, Sidebar } from "../components";

export const meta = {
  title: "Remixer",
  description: "Remixer",
  image: "/favicon.svg",
  url: "https://vitefilerouter.com",
};
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Popup />
      <div className="container">
        {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
        <div className="container__main">
          {/* <Header setSidebarOpen={setSidebarOpen} /> */}
          <div className="container__main__content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
