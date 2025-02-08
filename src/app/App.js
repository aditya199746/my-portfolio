import React, { useEffect, Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter, Routes, Route, useLocation
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </BrowserRouter >
  );
}
