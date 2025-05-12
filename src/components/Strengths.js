import React from "react";
import "./Strengths.css";

const Strengths = () => {
  return (
    <div className="strengths-container" id="strengths">
      <h2>Our Core Strengths</h2>
      <div className="strengths-list">
        <div className="strength-item">⚡ Client-first, tailored solutions</div>
        <div className="strength-item">📊 Expertise in Website Development, Salesforce, Oracle Fusion & 3D Modelling</div>
        <div className="strength-item">💻 Modern, scalable web & branding services</div>
        <div className="strength-item">🎯 Creative design and prototyping solution</div>
        <div className="strength-item">🎯 Dedicated support & fast delivery</div>
      </div>

      <h2 style={{ marginTop: "120px" }}>Technologies We Work With</h2>
      <div className="tech-icons">
        <div className="tech-icon">
          <img src="/images/salesforce.png" alt="Salesforce" />
        </div>
        <div className="tech-icon">
          <img src="/images/oracle.png" alt="Oracle" />
        </div>
        <div className="tech-icon">
          <img src="/images/react.png" alt="React" />
        </div>
        <div className="tech-icon">
          <img src="/images/node.png" alt="Node.js" />
        </div>
        <div className="tech-icon">
          <img src="/images/blender.png" alt="Blender" />
        </div>
        <div className="tech-icon">
          <img src="/images/autodesk-fusion.png" alt="autodesk-fusion" />
        </div>
        <div className="tech-icon">
          <img src="/images/zw3d.png" alt="zw3d" />
        </div>
        <div className="tech-icon">
          <img src="/images/NX.png" alt="NX" />
        </div>
        <div className="tech-icon">
          <img src="/images/Adobe_Express.png" alt="Adobe" />
        </div>
        <div className="tech-icon">
          <img src="/images/Sketch.png" alt="Sketch" />
        </div>
      </div>
    </div>
  );
};

export default Strengths;
