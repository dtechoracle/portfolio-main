"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import { useFontLoader } from "@next/font/google";

const SplashScreen = () => {
  // const { Poppins } = useFontLoader({ Poppins: { subsets: ["latin"] } });
  const [menuOpen, setMenuOpen] = useState(false);

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const colors = ["#000000", "#61677a", "#d8d9da", "#1d1d1d"];
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };

    return () => clearTimeout(timeout);
  }, []);

  const [falling, setFalling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const pillsContainer = document.getElementById("pills-container");
      const scrollPosition = window.scrollY;

      if (
        pillsContainer &&
        scrollPosition >= pillsContainer.offsetTop &&
        !falling
      ) {
        // Start falling animation
        setFalling(true);
        controls.start({
          y: "100%",
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [falling, controls]);

  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.3, delay: index * 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: color,
                }}
              />
            ))}
            <motion.div
              key="name"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: colors.length * 0.3 }}
              style={{ zIndex: 1 }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontFamily: "fantasy",
                }}
                className="font-bold text-[100px]"
              >
                DTO.
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <div className="bg-[#171717] main h-[100%]">
          {/* Your content goes here */}
          <Navbar />
          <div className="">
            <div className="w-full p-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-center text-white ">Hi 👋</p>
                <h2
                  className="text-6xl font-bold mb-4 text-center"
                  style={{
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif", // Added Poppins font-family
                  }}
                >
                  <br />
                  Let's build &nbsp;
                  <span className="bg-white text-black p-2">Websites</span>{" "}
                  <br />
                  together
                </h2>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src="/male.png"
                    width={250}
                    height={250}
                    className="bg-white rounded-full p-2"
                    style={{ marginRight: "10px" }} // Adjust spacing between images as needed
                  />
                  <Image
                    src="/female.png"
                    width={250}
                    height={250}
                    className="bg-white rounded-full p-2"
                    style={{ marginLeft: "10px" }} // Adjust spacing between images as needed
                  />
                </div>
                <br />
                <button className="block mx-auto py-2 px-4 bg-yellow-500 font-bold text-white rounded-r-full rounded-l-none hover:bg-blue-600">
                  Let's collabo
                </button>
                <br />
                <hr />
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-6">
                    {/* Left section containing text */}
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                      About me
                    </h2>
                    <p
                      style={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      My name is Ezekiel Jeremiah and I am a Frontend Developer
                      with more than 4yrs of experience and I build
                      user-friendly webapps for fast-growing startups & digital
                      agencies.
                    </p>
                  </div>
                  {/* <div class="md:w-1/2 bg-white rounded-xl flex justify-around">
                    <progress />
                    hi
                  </div> */}
                </div>
              </motion.div>
            </div>

            {/* Right Side (Image) */}
            <motion.div
              className="w-full md:w-1/2 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
