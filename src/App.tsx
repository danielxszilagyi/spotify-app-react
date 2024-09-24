import "./App.css";

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [collapseState, setCollapseState] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* sidebar mobile */}
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col text-center pe-0">
          <motion.button
            className="btn btn-dark bg-transparent border-0 border d-xl-none "
            type="button"
            whileHover={{ scale: 1.3, rotate: 0 }}
            whileTap={{
              scale: 0.9,
              rotate: -180,
              borderRadius: "100%",
            }}
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapse"
            onClick={() => setCollapseState(!collapseState)}
          >
            {collapseState ? "⇡" : "⇣"}
          </motion.button>
        </div>
      </div>
      <div className="d-xl-none collapse" id="sidebarCollapse">
        <Sidebar />
      </div>
      {/* sidebar desktop */}
      <div className="row m-0 " style={{ height: "100vh" }}>
        <div
          className="d-none d-xl-block col-xl-2 pt-1 pt-md-3"
          style={{
            backgroundColor: "#111111",
            maxWidth: "18rem",
          }}
        >
          <div className="position-fixed ">
            <Sidebar />
          </div>
        </div>
        <div className="col-12 col-xl-10  pt-sm-2 pt-0 px-1 px-sm-3 m-0 mx-sm-auto">
          <div className="container-fluid ">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <p className="bg-black small position-fixed bottom-0 m-0 ps-1">
        {cookies.token}
      </p> */}
    </>
  );
}

export default App;
