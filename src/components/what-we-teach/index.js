import React from 'react';
import tabletIcon from '../../assets/images/icons/tablet.svg';
import codeIcon from '../../assets/images/icons/code.svg';
import nodeJsIcon from '../../assets/images/icons/nodejs.svg';
import reactIcon from '../../assets/images/icons/react.svg';

const WhatWeTeach = () => (
  <div className="section-container section-container-gray">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <h2>What we teach</h2>
          <div className="divider-1">
            <span />
          </div>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="md-icon">
            <img src={tabletIcon} alt="Tablet" />
          </div>
          <h4>HTML &amp; CSS</h4>
          <p>
            Fundamentals of design. Design static web pages using best front-end
            practices.
          </p>
        </div>
        <div className="col-sm-3">
          <div className="md-icon">
            <img src={codeIcon} alt="Code" />
          </div>
          <h4>JavaScript</h4>
          <p>
            Use powerful modern scripting language to build web applications.
          </p>
        </div>
        <div className="col-sm-3">
          <div className="md-icon">
            <img src={nodeJsIcon} alt="NodeJS" />
          </div>
          <h4>Node.js</h4>
          <p>Web application development powered by modern and fast Node.js</p>
        </div>
        <div className="col-sm-3">
          <div className="md-icon">
            <img src={reactIcon} alt="React" />
          </div>
          <h4>React</h4>
          <p>A Javascript library for building user interfaces</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeTeach;
