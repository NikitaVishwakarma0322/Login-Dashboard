import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import JobDesk from "./pages/jobdesk/Jobdesk";
import Holiday from "./pages/holiday/Holiday";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ...............Login................. */}
          <Route path="/" element={<Login />} />
          {/* ...............Dashboard................. */}
          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          />
          {/* ...............Job Desk................. */}
          <Route
            path="/job-desk"
            element={
              <Sidebar>
                <Layout>
                  <JobDesk />
                </Layout>
              </Sidebar>
            }
          />

          {/* -------------Holiday------------- */}
          <Route
            path="/holiday"
            element={
              <Sidebar>
                <Layout>
                  <Holiday />
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="*"
            element={
              <h1 style={{ color: "red", marginLeft: 450, marginTop: 250 }}>
                Page Not Found: Error
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
