import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";

export default function SideBar() {
  const [effect, setEffect] = useState({
    home: false,
    index: false,
    new: false,
    giveaway: false,
    faq: false,
  });

  function startAnimation(icon) {
    setEffect({ ...effect, [icon]: true });

    setTimeout(() => {
      setEffect({
        home: false,
        index: false,
        new: false,
        giveaway: false,
        faq: false,
      });
    }, 1000);
  }

  return (
    <div className="sidebar-container sticky">
      <div>
        <Link to="/index" className="icon-container">
          <img
            className={effect.index ? "pulse" : ""}
            onClick={() => {
              startAnimation("index");
            }}
            style={{ height: "50px" }}
            src="https://static.thenounproject.com/png/1400400-200.png"
            alt="sidebaricon"
          />
        </Link>
      </div>
      <div className="icon-container">
        <Link to="/new">
          <img
            className={effect.new ? "pulse" : ""}
            onClick={() => {
              startAnimation("new");
            }}
            style={{ height: "100px" }}
            src="https://static.thenounproject.com/png/1409569-200.png"
            alt="sidebaricon"
          />
        </Link>
      </div>
      <div className="icon-container">
        <Link to="/giveaways">
          <img
            className={effect.giveaway ? "pulse" : ""}
            onClick={() => {
              startAnimation("giveaway");
            }}
            style={{ height: "50px" }}
            src="https://static.thenounproject.com/png/5014824-200.png"
            alt="sidebaricon"
          />
        </Link>
      </div>
      <div className="icon-container">
        <Link to="/faq">
          <img
            className={effect.faq ? "pulse" : ""}
            onClick={() => {
              startAnimation("faq");
            }}
            style={{ height: "100px" }}
            src="https://static.thenounproject.com/png/124666-200.png"
            alt="sidebaricon"
          />
        </Link>
      </div>
    </div>
  );
}
