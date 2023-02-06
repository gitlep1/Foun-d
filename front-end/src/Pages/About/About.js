import React from "react";
import "./About.scss";

export default function About() {
  return (
    <section id="aboutSectionContainer">
      <section id="aboutSection">
        <h1 id="about-heading">Meet The Devs!</h1>
        <div>
          <h2 id="aboutus-heading">About Us:</h2>
          <p id="aboutus-heading">
            {" "}
            We are a group of Jr. Software Developers currently enrolled at
            Pursuit. As our journey at Pursuit comes to an end we are showing
            off all that we have learned with this capstone project. Foun'd is
            an idea that we hatched when trying to find a problem that we would
            like to solve.{" "}
          </p>
        </div>
        <div id="meet-div">
          <div id="dev-div">
            <h4 id="name-headings">Candace Garvin</h4>
            <img
              className="about-page-img"
              src="https://avatars.githubusercontent.com/u/98069665?v=4"
              alt="Candace"
            />
            <h5 id="title-headings">Title: Jr. Software Engineer</h5>
            <a
              id="github-link"
              href="https://github.com/CandaceNia"
              target="_blank"
              rel="nooppener noreferrer"
            >
              {" "}
              Candace's Github
            </a>
            <p className="bioText">
              I am currently a Jr. Full Stack Software Developer. I am pursuing
              this field of work because I have a profound love for computers
              and their language. Some of my strengths are leadership and
              project management and I am an expert at time management. The next
              step I would like to take in my career is working for a big tech
              company so I can gain experience as well as work with other
              developers in the industry.
            </p>
          </div>
          <div id="dev-div">
            <h4 id="name-headings">Jan Matias</h4>
            <img
              className="about-page-img"
              src="https://avatars.githubusercontent.com/u/96319078?v=4"
              alt="Jan"
            />
            <h5 id="title-headings">Title: Jr. Software Engineer</h5>
            <a
              id="github-link"
              href="https://github.com/JC-MT"
              target="_blank"
              rel="nooppener noreferrer"
            >
              {" "}
              Jan's Github
            </a>
            <p className="bioText">
              {" "}
              Hi there! I’m Jan, an aspiring Full Stack Web Developer based in
              NYC. If I’m not battling self-spawned bugs, you can catch me binge
              watching Anime, being forced to watch Gilmore Girls for the
              millionth time, or planning a getaway trip with my lovely wife.
            </p>
          </div>
          <div id="dev-div">
            <h4 id="name-headings">Antonio Shivers</h4>
            <img
              className="about-page-img"
              src="https://avatars.githubusercontent.com/u/55455906?v=4"
              alt="Antonio"
            />
            <h5 id="title-headings">Title: Jr. Software Engineer</h5>
            <a
              id="github-link"
              href="https://github.com/gitlep1"
              target="_blank"
              rel="nooppener noreferrer"
            >
              {" "}
              Antonio's Github
            </a>
            <p className="bioText">
              I am currently a Jr. Full Stack Software Developer. I am pursuing
              this field of work because I have always had a love of computers
              and technology ever since childhood. Some of my strengths include:
              organization, problem solvering, attention to detail, and a
              willingness to learn. The next step I would like to take in my
              career is working for a big tech company so I can gain experience,
              work with other developers in the industry and continue learning
              more about software engineering.
            </p>
          </div>
          <div id="dev-div">
            <h4 id="name-headings">Isaac Gonzalez</h4>
            <img
              className="about-page-img"
              src="https://avatars.githubusercontent.com/u/90275620?v=4"
              alt="Isaac"
            />
            <h5 id="title-headings">Title: Jr. Software Engineer</h5>
            <a
              id="github-link"
              href="https://github.com/0IG"
              target="_blank"
              rel="nooppener noreferrer"
            >
              {" "}
              Isaac's Github
            </a>
            <p className="bioText">
              Every day I'm met with a new challenge, whether it’s in coding or
              in my Brazilian Jujitsu journey. And while failing forward is a
              part of the journey, my dedication and resourcefulness are what
              help me overcome any obstacle.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
