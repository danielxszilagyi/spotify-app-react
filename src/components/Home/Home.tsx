import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="text-secondary text-center d-flex flex-column justify-content-center align-items-center"
      style={{ height: "99vh" }}
    >
      <h1>React Homework</h1>
      <div>
        <h3>
          To be able to use you need to install a CORS unblocker{" "}
          <a href="https://chromewebstore.google.com/search/cors">extension</a>.
        </h3>
        <div>
          <motion.button
            whileHover={{
              scale: 1.3,
              borderRadius: "10px",
            }}
            whileTap={{ scale: 0.9, rotate: 20, opacity: 0 }}
            className="btn btn-primary font-white mt-5 px-4"
          >
            <Link to={"/playlists"} className="text-light text-decoration-none">
              Get Started
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
