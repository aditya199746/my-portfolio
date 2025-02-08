import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MicroFrontendIframe from "./MicroFrontendIframe";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route
          path="/mergeSort"
          element={
            <Suspense fallback={<div>Loading Merge Sort...</div>}>
              <MicroFrontendIframe
                src="https://aditya199746.github.io/mergeSort/"
                title="Merge Sort Visualization"
              />
            </Suspense>
          }
        />
        <Route
          path="/insertionSort"
          element={
            <Suspense fallback={<div>Loading Insertion Sort...</div>}>
              <MicroFrontendIframe
                src="https://aditya199746.github.io/InsertionSort/"
                title="Insertion Sort Visualization"
              />
            </Suspense>
          }
        />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
