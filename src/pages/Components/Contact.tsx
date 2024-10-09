export default function Contact() {
  return (
    <>
      <section id="contact">
        <p className="section_text_p1">Get in Touch</p>
        <h1 className="title fw-bold">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="./email.png" alt="Email icon" className="icon contact-icon email-icon" />
            <p className="m-0">
              <a href="https://g.co/kgs/K8c3DgX" target="_blank">diana.ivelinova@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src="./linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p className="m-0">
              <a href="https://www.linkedin.com/in/diyana-ivanova-593152273" target="_blank">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
