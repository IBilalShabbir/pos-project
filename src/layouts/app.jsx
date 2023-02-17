import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export const meta = {
  title: "Remixer",
  description: "Remixer",
  image: "/favicon.svg",
  url: "https://vitefilerouter.com",
};
export default function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="container__main">
          <div className="container__main__content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
