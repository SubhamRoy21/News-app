
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import{
  BrowserRouter,
  Route,
  Routes,
  Link
}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="General" country="in" category="General"/>}/>
          <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" country="in" category="Business"/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key="Entertainment" country="in" category="Entertainment"/>}/>
          <Route exact path="/General" element={<News setProgress={this.setProgress} key="General" country="in" category="General"/>}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" country="in" category="Health"/>}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" country="in" category="Science"/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" country="in" category="Sports"/>}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" country="in" category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

