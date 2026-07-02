import "../../styles/experience.css";
import { useState } from "react";
import experienceData from "../../data/experienceData";

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(null);
    const company = experienceData[selectedCompany];
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="experience-header">

          <p className="section-label">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2>
            Professional Experience
          </h2>

          <p className="experience-intro">
            Before learning Amazon PPC, I spent more than 4 years working in
            customer service and technical support. Those roles helped me build
            the skills I now apply while learning Amazon PPC.
          </p>

        </div>

        <div className="experience-toggle">

          <button
            className={`toggle-button ${
              selectedCompany === "dexcom" ? "active" : ""
            }`}
            onClick={() => setSelectedCompany("dexcom")}
          >
            Dexcom
          </button>

          <button
            className={`toggle-button ${
              selectedCompany === "sitel" ? "active" : ""
            }`}
            onClick={() => setSelectedCompany("sitel")}
          >
            Sitel
          </button>

        </div>

        {!company ? (

  <div className="experience-empty">

    <h3>Select a Company</h3>

    <p>
      Select a company above to see my role,
      what I worked on, and the skills I developed.
    </p>

  </div>

) : (

  <div className="experience-content">

  {/* Photo Section */}

  <div className="experience-gallery">

   <div className="experience-carousel">

  <div className="carousel-track">

    {[...company.photos, ...company.photos].map((photo, index) => (

      <div
        className="carousel-card"
        key={index}
      >
        <img
          src={photo}
          alt={`${company.company} ${index + 1}`}
          className="experience-photo"
        />
      </div>

    ))}

  </div>

</div>

    <p className="gallery-caption">
      Photos from my time at {company.company}.
    </p>

  </div>

  {/* Job Information */}

  <div className="experience-info">

    <h3>{company.role}</h3>

    <h4>{company.company}</h4>

    <p>{company.duration}</p>

  </div>

  {/* Responsibilities */}

  <div className="experience-block">

    <h3>Responsibilities</h3>

    <ul>

      {company.responsibilities.map((item, index) => (

        <li key={index}>{item}</li>

      ))}

    </ul>

  </div>

  {/* What I Learned */}

  <div className="experience-block">

    <h3>What I Learned</h3>

    <p>{company.learned}</p>

  </div>

  {/* Skills */}

  <div className="experience-block">

    <h3>Skills I Bring to Amazon PPC</h3>

    <div className="skills-grid">

      {company.skills.map((skill, index) => (

        <span key={index}>{skill}</span>

      ))}

    </div>

  </div>

</div>

)}

      </div>
    </section>
  );
}

export default Experience;