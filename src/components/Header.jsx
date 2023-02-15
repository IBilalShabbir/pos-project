import { useLocation } from "react-router-dom";

export default function Header({ children }) {
  const location = useLocation();
  const locationHeader = location.pathname.split("/").at(-1);
  return (
    <div className="container__main__header">
      <div className="container__main__header__title">
        {locationHeader === "dashboard" ? "Home" : locationHeader}
      </div>
      {children}
    </div>
  );
}
