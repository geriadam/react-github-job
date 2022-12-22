import React, { useState } from 'react'
import { connect } from "react-redux"
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom"
import { Navbar } from './components/navbar/navbar'
import Login from "./pages/login"
import Signup from "./pages/signup"
import JobList from "./pages/jobList"
import JobDetail from "./pages/jobDetail"
import { clearMessage } from "./actions/message"

import { history } from './helpers/history'

function App() {
  return (
    <Router history={history}>
      <div>
        <div className="flex h-full flex-col">
          <Navbar />
          <div className="mx-auto flex w-full grow flex-col px-6 pt-2 pb-8 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
            <Routes>
              <Route
                exact
                path="/"
                render={() => {
                    if (this.state.isLoggedIn) {
                      return redirect('/job')
                    }

                    return redirect('/login')
                }}
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/job" element={<JobList />} />
              <Route exact path="/job/:id" element={<JobDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
