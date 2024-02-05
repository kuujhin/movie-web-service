import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./practice/1_todo_list";
import CoinTracker from "./practice/2_coin_tracker";
import MovieList from "./practice/3_movie_list";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div>
    <TodoList />
    <CoinTracker />
    <MovieList />
  </div>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
