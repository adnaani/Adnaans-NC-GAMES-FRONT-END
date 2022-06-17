import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { IconContext } from "react-icons/";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { loggedUser } = useContext(UserContext);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {Object.keys(loggedUser).length === 0 ? (
            <Link to="/users">
              <CgIcons.CgProfile className="profile" />
            </Link>
          ) : (
            <div className="logged-nav">
              <section className="user-nav">
                <img
                  src={loggedUser.avatar_url}
                  className="user-nav-image"
                  alt={loggedUser.username}
                />
                <p>{loggedUser.username}</p>
              </section>
              <Link to="/users" className="select-user-nav">
                <FiIcons.FiUsers />
                Select User
              </Link>
            </div>
          )}
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
