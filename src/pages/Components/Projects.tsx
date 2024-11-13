import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./project-1.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Todoloo
              </h2>
              <div className="btn-container">
                <Link href="https://github.com/DianaIvelinova/todoloo" target="_blank">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link href="https://todoloo-diyanaiv.vercel.app/" target="_blank">
                  <button className="btn btn-color-2 project-btn">
                    Website 
                  </button>
                </Link>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="project-container">
                <img src="./project-2.jpg" alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Eventsculpt
              </h2>
              <div className="btn-container">
                <Link href="https://github.com/DianaIvelinova/Eventsculpt" target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </Link>
                  <Link href="https://eventsculpt.azurewebsites.net/" target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Website 
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
