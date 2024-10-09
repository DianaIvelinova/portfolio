import Link from "next/link";

export default function Profile() {
  return (
    <>
    <section id="profile">
        <div className="section_pic-container">
          <img src="./profile-pic.png" alt="./profile-pic.png" />
        </div>
        <div className="section_text">
          <p className="section_text_p1">Hello, I&apos;m</p>
          <h1 className="title">Diyana Ivanova</h1>
          <p className="section_text_p2" style={{color: '#592085'}}>Frontend Developer</p>
          <div id="socials-container">
            <Link href="https://www.linkedin.com/in/diyana-ivanova-593152273" target="_blank">
                <img src="./linkedin.png" alt="My LinkedIn profile" className="icon" />
            </Link>
            <Link href="https://github.com/DianaIvelinova" target="_blank">
                <img src="./github.png" alt="My Github profile" className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
