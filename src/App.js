import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import Sdata from './Sdata';
import Card from './Card';
//import Nav from './Nav';

function App() {
  return (
    <>
    <h1 className="heading_style">Welcome to My Blog</h1>
        <ul>
          <li><a class="active" href="./index.js">Home</a></li>
          <li><a href="#programming">Programming</a></li>
          <li><a href="#anime">Anime</a></li>
          
        </ul>
    <Card 
    imgsrc={Sdata[0].imgscr}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].links}
    />
    <Card
     imgsrc={Sdata[1].imgscr}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].links}
    />
     <Card
     imgsrc={Sdata[2].imgscr}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].links}
    />
    </>
  );
}

export default App;
