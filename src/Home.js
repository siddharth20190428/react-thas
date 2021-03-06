import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center-page">
      <h3>React THAs</h3>
      <ul className="links">
        <li>
          <Link to="/day16/chess">Day 16 (Chess Board)</Link>
        </li>
        <li>
          <Link to="/day16/meme-card">Day 16 (MemeCard)</Link>
        </li>
        <li>
          <Link to="/day17/">Day 17 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day18/chess">Day 18 (Chess Board)</Link>
        </li>
        <li>
          <Link to="/day18/calorie-list">Day 18 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day19/">Day 19 (Class component)</Link>
        </li>
        <li>
          <Link to="/day20/">Day 20 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day21/">Day 21 (CalorieTracker)</Link>
        </li>
        <li>
          <Link to="/day22/">Day 22 (MemeGenerator)</Link>
        </li>
        <li>
          <Link to="/day24/">Day 24 (Website)</Link>
        </li>
        <li>
          <Link to="/day25/">Day 25 (Website using bootstrap)</Link>
        </li>
        <li>
          <Link to="/day26/counter">
            Day 26 (Counter State Change using Redux)
          </Link>
        </li>
        <li>
          <Link to="/day26/user-form">
            Day 26 (User State Change using Redux)
          </Link>
        </li>
        <li>
          <Link to="/day27/">Day 27 (To Do using React Thunk)</Link>
        </li>
        <li>
          <Link to="/day28/">Day 28 (Weather Project with state)</Link>
        </li>
        <li>
          <Link to="/day29/">Day 29 (Weather Project with redux)</Link>
        </li>
        <li>
          <Link to="/day33/">Day 33 (Todo list and dark mode in TS)</Link>
        </li>
        <li>
          <Link to="/day34/">Day 34 (Counter with redux in TS)</Link>
        </li>
        <li>
          <Link to="/day35/">Day 35 (Instagram with TS)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
