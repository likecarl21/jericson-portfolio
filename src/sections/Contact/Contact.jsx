import "../../styles/contact.css";
import resume from "../../assets/Resume/Jericson_Pajotal_Resume.pdf";
function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-header">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's Connect
          </h2>

          <p className="contact-intro">
            Thanks for visiting my portfolio.
            If you'd like to talk about Amazon PPC or an opportunity
            to work together, I'd be happy to hear from you.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="mailto:jericson.pajotal.ppc@gmail.com"
            className="contact-card"
          >
            <h3>Email</h3>

            <p>
              jericson.pajotal.ppc@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/jericson-pajotal-9616342a8/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>

            <p>
              View Profile →
            </p>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~016e2e667a4848c9cb"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>Upwork</h3>

            <p>
              View Profile →
            </p>
          </a>

          <div className="contact-card">

            <h3>
              Location
            </h3>

            <p>
              Taguig City
            </p>

            <p>
              Metro Manila, Philippines
            </p>

          </div>
          
        </div>
        <div className="resume-download">

  <h3>
    Resume
  </h3>

  <p>
    Download my latest resume in PDF format.
  </p>

  <a
    href={resume}
    download="Jericson_Pajotal_Resume.pdf"
    className="resume-button"
  >
    Download Resume
  </a>

</div>
            <div className="back-to-top">

  <a href="#hero" className="back-button">
    ↑ Back to Top
  </a>

</div>
      </div>

    </section>
  );
}

export default Contact;