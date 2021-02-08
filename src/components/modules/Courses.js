import React, { Component } from "react";
import "./About.css";
import fanvision from "../../img/fanvision_screen.png";
import adamovies from "../../img/adamovies_screen.png";

class Courses extends Component {
    constructor(props) {
      super(props);
      this.state = {
        courses: 'all',
      };
    }

    render() {
      return (
        <div className='Courses-container'>
            <div className='courses-subcontainer'>
                <h1 className='u-textCenter'>Courses</h1>
                <div className='single-class'>
                    <h3>Spring 2021</h3>
                    <a target='_blank' rel='noreferrer'>6.031 - Elements of Software Construction</a>
                    <a target='_blank' rel='noreferrer'>6.036 - Intro to Machine Learning</a>
                    <a target='_blank' rel='noreferrer'>6.08 - Intro to EECS via Interconnected Embedded Systems</a>
                    {this.state.courses === 'all' && <a>3.091 - Intro to Solid State Chemistry</a>}
                </div>
                <div className='single-class'>
                    <h3>Fall 2020</h3>
                    <a target='_blank' rel='noreferrer'>6.006 - Intro to Algorithms</a>
                    <a target='_blank' rel='noreferrer'>6.004 - Computation Structures</a>
                    <a target='_blank' rel='noreferrer'>18.06 - Linear Algebra</a>
                    <a target='_blank' rel='noreferrer'>18.600 - Probability and Random Variables</a>
                    {this.state.courses === 'all' && <a target='_blank' rel='noreferrer'>21W.747 - Rhetoric</a>}
                </div>
                <div className='single-class'>
                    <h3>Spring 2020</h3>
                    <a target='_blank' rel='noreferrer'>6.009 - Fundamentals of Programming</a>
                    <a target='_blank' rel='noreferrer'>6.042 - Math for Computer Science</a>
                    {this.state.courses === 'all' && <a target='_blank' rel='noreferrer'>8.02 - Physics II</a>}
                    {this.state.courses === 'all' && <a target='_blank' rel='noreferrer'>21M.051 - Fundamentals of Music</a>}
                </div>
                {this.state.courses === 'all' && <div className='single-class'>
                    <h3>Fall 2019</h3>
                    <a target='_blank' rel='noreferrer'>6.0001/2 - Intro to Computer Science</a>
                    <a target='_blank' rel='noreferrer'>18.02 - Multivariable Calculus</a>
                    <a target='_blank' rel='noreferrer'>8.01 - Physics I</a>
                    <a target='_blank' rel='noreferrer'>21W.022 -  Reading and Writing Autobiography</a>
                </div>}
            </div>
            <div className='projects-container'>
                <h1 className='u-textCenter'>Projects</h1>
                <div className='site-card' >
                <div className='name-div'><a href='https://www.adamovies.com' target='_blank' rel='noreferrer' className='u-linked title-text'>Adamovies</a></div>
                    <img src={adamovies} className='site-img'/>
                    <p className='description-text'>Adamovies is an interactive site for movie and TV show geeks who like to read about what they watch. Reviews are published by admin users, and logged-in users have the ability to like and comment on reviews.</p>
                </div>
                <div className='site-card' >
                    <div className='name-div'><a href='https://fanvision.herokuapp.com'target='_blank' rel='noreferrer'className='u-linked title-text'>Fanvision</a></div>
                    <img src={fanvision} className='site-img'/>
                    <p className='description-text'>Fanvision is a platform for NBA fans to show their predictive skills in a competitive and fun game amongst other users. Many sports fans want to participate in sports betting but don't want to put their own assets at risk, so Fanvision serves as a fun and no risk alternate to sports betting.</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Courses;