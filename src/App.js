import React from 'react';
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';
import { Switch, Route } from 'react-router-dom';
import Course_content from './Components/Course_content';
import './App.css'

function App(props) {


  return (
    <div>
      <Navbar />
      <Switch>
        {/* <Route exact path ='/' component={Navbar} /> */}

        <Route exact path="/" component={Courses}/>
        <Route exact path="/course" component={Course_content}></Route>
      </Switch>

    </div>
  )
}

export default App
