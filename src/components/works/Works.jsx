import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "PitchOnline",
      desc:
        "Work in progress C# desktop app. Demonstrating MVVM & Dependency Injection patterns for a Online/Local AI card game called Pitch. ",
        github:
        "https://github.com/JarrettMcCarty/PitchOnline"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "CardGameAPI",
      desc:
        "Work in progress node.js API that works in cojunction with PitchOnline app to perform user login, register, lobby management, gamestate, etc.",
      github:
          "https://github.com/JarrettMcCarty/CardGameAPI"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "QuadTree",
      desc:
        "Final Project for my Data Structures class. Visual representation of the QuadTree data structure in C++.",
      bkgrd:
      "",
      github:
      "https://www.github.com/JarrettMcCarty/CISS-350-QuadTree"
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Tic-Tac-Toe",
      desc:
        "Final project for Assembly language. Tic-Tac-Toe wrote in assembly language with an AI opponent.",
      bkgrd:
      "",
      github:
      "https://github.com/JarrettMcCarty/CISS-360-Tic-Tac-Toe"
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "OthelloAI",
      desc:
        "Final project for Artificial Inteligence course. Othello AI that was used in a class tournament where each student pitted their AI against the others by reading move from a site using that move to calculate game state and return move. Used Alpha beta pruning etc.",
      bkgrd:
      "",
      github:
      "https://github.com/JarrettMcCarty/CISS-450-Othello-AI"
    },
    {
      id: "6",
      icon: "./assets/writing.png",
      title: "Lyght",
      desc:
        "Work In progress personal Game Engine. Always wanted to do dev in game development and this is a first step project for understanding game engine design.",
      bkgrd:
      "",
      github:
      "https://github.com/JarrettMcCarty/Lyght"
    },
    {
      id: "7",
      icon: "./assets/writing.png",
      title: "OpenGL RoboArm",
      desc:
        "Computer Graphics course project to model a robotic arm in OpenGL and allow it to have full movement given user control.",
      bkgrd:
      "",
      github:
      "https://github.com/JarrettMcCarty/CISS-380-OpenGL-RoboticArm"
    },
    {
      id: "7",
      icon: "./assets/writing.png",
      title: "OpenGL Random Terrain Gen",
      desc:
        "Computer Graphics course project to create a random terrain.",
      bkgrd:
      "",
      github:
      "https://github.com/JarrettMcCarty/CISS-380-OpenGL-RandomTerrain"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  <i class="fas fa-code"></i>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.github} target="_blank"> <h4>Github</h4> </a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
