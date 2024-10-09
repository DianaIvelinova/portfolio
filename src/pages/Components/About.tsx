export default function About() {
  return (
    <>
      <section id="about">
        <p className="section_text_p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container" style={{backgroundColor: '#000'}}>
                <img src="./experience.png" alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p className="experience-text"> 1 year+ Apprenticeship </p>
                <p className="experience-text"> Frontend Development </p>
              </div>
              <div className="details-container" style={{backgroundColor: '#000'}}>
                <div className="experience-details-container">
                  <div className="about-containers">
                    <div className="article-container">
                      <article>
                        <img src="./checkmark.png" alt="checkmark icon" className="icon" />
                        <div>
                          <h3>Next.js</h3>
                          <p className="experience-text">Intermediate</p>
                        </div>
                      </article>
                      <article>
                        <img src="./checkmark.png" alt="checkmark icon" className="icon" />
                        <div>
                          <h3>Typescript</h3>
                          <p className="experience-text">Intermediate</p>
                        </div>
                      </article>
                      <article>
                        <img src="./checkmark.png" alt="checkmark icon" className="icon" />
                        <div>
                          <h3>HTML/CSS</h3>
                          <p className="experience-text">Expert</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-container" style={{color: '#000'}}>
              <p>
                I am a passionate Frontend Developer with a year of
                apprenticeship experience specializing in Next.js with
                Typescript. It has equipped me with a proper foundation in
                building user-friendly applications. In addition to my technical
                skills, I have professional experience as a Business Apps
                Administrator at A1 Bulgaria. In this role, I closely managed
                Atlassian products. This experience has honed my ability to work
                in fast-paced environments and develop solutions that meet
                business needs.I am committed to continuous learning, and I am
                excited to contribute my skills to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
