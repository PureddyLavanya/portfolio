import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode,SiCodechef } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Pureddy Lavanya</span>&nbsp;
                 and I'm from <span> Visakhapatnam,Andhra Pradesh.</span>
                <br />
                <br />
                I am pursuing Bachelor's degree in Computer Science and Engineering at VIIT.
                <br />
                <br />
                <br/>
                  I am a passionate
                  <b className="yellow"> Full-Stack developer</b>, 
                  <b className="yellow"> Python Developer</b>, 
                  <b className="yellow"> Competitive Programmer</b>.
                  <br /><br />
                  I am interested in 
                  <b className="yellow"> learning new technologies </b>and 
                  <b className="yellow"> building projects. </b>
                  <br />
                  <br />
                  My motto is <b className="yellow">"Think,Learn and Grow"</b>
                  <br/>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/PureddyLavanya"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.codechef.com/users/pureddylavanya"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="codechef"
                    >
                      <SiCodechef />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/p-lavanya-3147p/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/Lavanyap89/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="leetcode"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About