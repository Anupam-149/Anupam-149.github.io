import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import Hobbies from "./components/Hobbies";
import SkillPage from "./components/SkillPage";
import Loading from "./components/Loading";
import MainLoading from "./components/MainLoading";
import SoundBar from "./components/SoundBar";

export default function App() {
  let [loading, setLoading] = useState(false);
  // console.log(loading);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, [loading]);

  let [mainloading, setMainLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setMainLoading(false), 3500);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <SoundBar />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                mainloading ? <MainLoading /> : <Main setLoading={setLoading} />
              }
            />
            <Route
              exact
              path="about"
              element={loading ? <Loading loading={loading} /> : <AboutPage />}
            />
            <Route
              exact
              path="hobbies"
              element={loading ? <Loading loading={loading} /> : <Hobbies />}
            />
            <Route
              exact
              path="work"
              element={loading ? <Loading loading={loading} /> : <WorkPage />}
            />
            <Route
              exact
              path="skill"
              element={loading ? <Loading loading={loading} /> : <SkillPage />}
            />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </ThemeProvider>
  );
}

// SkillPage.js for stagger children transition
// THEME IS PROVIDED HERE, AND FOR CHANGING , IT IS PASS AS PROPS , for eg . Logo.js
