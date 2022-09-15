import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import FreeCourses from "./pages/FreeCourses";
import PaidCourses from "./pages/PaidCourses";
import Teachers from "./pages/Teachers";
import CourseVideo from "./pages/CourseVideo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/free-courses" element={<FreeCourses />} />
        <Route path="/paid-courses" element={<PaidCourses />} />{" "}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/course" element={<CourseVideo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
