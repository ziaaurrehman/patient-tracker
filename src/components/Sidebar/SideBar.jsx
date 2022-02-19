import { NavLink } from "react-router-dom";
import { FaBars, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    image: "/images/dashmenu.svg",
  },

  {
    path: "/file-manager",
    name: "Patient",
    image: "/images/plus.svg",
    subRoutes: [
      {
        path: "/settings",
        name: "All patient data",
        image: "/images/clander.svg",
      },
      {
        path: "",
        name: "Add new patient",
        image: "/images/clander.svg",
      },
      {
        path: "",
        name: "Inactive patients",
        image: "/images/usold.svg",
      },
      {
        path: "",
        name: "Discharged patient",
        image: "/images/usold.svg",
      },
    ],
  },
  {
    path: "/setting",
    name: "Appointments",
    image: "/images/usold.svg",
  },
  {
    path: "/file-manager",
    name: "Reports",
    image: "/images/folder-medical-solid 1.svg",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        image: "/images/usold.svg",
      },
      {
        path: "",
        name: "2FA",
        image: "/images/print.svg",
      },
    ],
  },
  {
    path: "/settings",
    name: "Utilities",
    image: "/images/plus.svg",
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        image: "/images/usold.svg",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        image: "/images/usold.svg",
      },
    ],
  },

  {
    path: "/file-manager",
    name: "Print",
    image: "/images/print.svg",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/",
    name: "Logout",
    image: "/images/logout.svg",
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="flex">
        <motion.div
          animate={{
            width: isOpen ? "300px" : "60px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="/images/dashlog.svg" alt="" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">
                    <img src={route.image} alt=""></img>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main style={{ width: "100%" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
