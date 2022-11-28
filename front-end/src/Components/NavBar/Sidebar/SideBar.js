import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";

export default function SideBar({model}) {
  const [effect, setEffect] = useState({
    home: false,
    index: false,
    new: false,
    giveaway: false,
    faq: false,
  });

	const [show, setShow] = useState({
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
    <div className={`sidebar-container sticky ${ model ? "model-On" : ''}`}>
      <div>
        <Link to="/index" className={effect.index ? "pulse" : ""}>
          <img
            className={effect.index ? "pulse" : ""}
            onClick={() => {
              startAnimation("index");
            }}
						onMouseOver={() => {
							setShow({	
								home: false,							
								new: false,
								giveaway: false,
								faq: false, 
								index: true })
						}}
						onMouseLeave={() => {
							setShow({
								home: false,
								index: false,
								new: false,
								giveaway: false,
								faq: false,
							})
						}}
            style={{ height: "50px" }}
            src="https://static.thenounproject.com/png/1400400-200.png"
            alt="sidebaricon"
          />
					<span className={`sidebar-tooltip ${ show.index ? `visible-sidebar-tooltip` : ``}`}>View All Items 🏁</span>
        </Link>
				<span className={`sidebar-tooltip ${ show.index ? `visible-sidebar-tooltip` : ``}`}>View All Items 🏁</span>
      </div>
      <div className="icon-container">
        <Link to="/new" className={effect.new ? "pulse" : ""}>
          <img
            className={effect.new ? "pulse" : ""}
            onClick={() => {
              startAnimation("new");
            }}
						onMouseOver={() => {
							setShow({								
								home: false,
								index: false,
								giveaway: false,
								faq: false,
								new: true 
							})
						}}
						onMouseLeave={() => {
							setShow({
								home: false,
								index: false,
								new: false,
								giveaway: false,
								faq: false,
							})
						}}
            style={{ height: "100px" }}
            src="https://static.thenounproject.com/png/1409569-200.png"
            alt="sidebaricon"
          />
					<span className={`add-span sidebar-tooltip ${ show.new ? `visible-sidebar-tooltip` : ``}`}>Add New 🆕</span>
        </Link>
				<span className={`add-span sidebar-tooltip ${ show.new ? `visible-sidebar-tooltip` : ``}`}>Add New 🆕</span>

			</div>
      <div className="icon-container">
        <Link to="/giveaways" className={effect.giveaway ? "pulse" : ""}>
          <img
            className={effect.giveaway ? "pulse" : ""}
            onClick={() => {
              startAnimation("giveaway");
            }}
						onMouseOver={() => {
							setShow({								
								home: false,
								index: false,
								new: false, 
								giveaway: true,
								faq: false
							 })
						}}
						onMouseLeave={() => {
							setShow({
								home: false,
								index: false,
								new: false,
								giveaway: false,
								faq: false,
							})
						}}
            style={{ height: "50px" }}
            src="https://static.thenounproject.com/png/5014824-200.png"
            alt="sidebaricon"
          />
									<span className={`sidebar-tooltip ${ show.giveaway ? `visible-sidebar-tooltip` : ``}`}>Giveaway 🎁</span>
        </Link>
				<span className={`sidebar-tooltip ${ show.giveaway ? `visible-sidebar-tooltip` : ``}`}>Giveaway 🎁</span>
      </div>
      <div className="icon-container">
        <Link to="/faq" className={effect.faq ? "pulse" : ""}>
          <img
            className={effect.faq ? "pulse" : ""}
            onClick={() => {
              startAnimation("faq");
            }}
						onMouseOver={() => {
							setShow({								
								home: false,
								index: false,
								new: false,
								giveaway: false, 
								faq: true })
						}}
						onMouseLeave={() => {
							setShow({
								home: false,
								index: false,
								new: false,
								giveaway: false,
								faq: false,
							})
						}}
            style={{ height: "100px" }}
            src="https://static.thenounproject.com/png/124666-200.png"
            alt="sidebaricon"
          />
					<span className={`faq-span sidebar-tooltip ${ show.faq ? `visible-sidebar-tooltip` : ``}`}>FAQ's 🧐</span>
        </Link>
				<span className={`faq-span sidebar-tooltip ${ show.faq ? `visible-sidebar-tooltip` : ``}`}>FAQ's 🧐</span>
      </div>
    </div>
  );
}
