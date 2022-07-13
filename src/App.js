import "./App.css";

import Navbar from "./componenets/Navbar";
import News from "./componenets/News";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={6}
                  country="us"
                  ccategory="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="technology"
                  key="technology"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="general"
                  key="home"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
