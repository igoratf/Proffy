import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import './styles.css';
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(res => {
      const { total } = res.data;
      setTotalConnections(total);
    })
    .catch(err => console.log('Error ', err));
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online studying platform.</h2>
        </div>

        <img
          src={landingImg}
          alt="Studying platform"
          className="hero-image"
        />

        <div className="buttons-container">
            <Link to="/study" className="study">
                <img src={studyIcon} alt="Study" />
                Study
            </Link>

            <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIcon} alt="Teach" />
                Teach
            </Link>
        </div>

        <span className="total-connections">
            Total of {totalConnections} connections
            <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
