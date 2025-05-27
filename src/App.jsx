import "./App.css";
import ProjectCard from "./Porjects/ProjectCard";
import { PROJECTS } from './projects.js'


function App() {
  return (
    <>
      <div>

        <div className="about">
          <h2>Про мене</h2>
          <p>
            Привіт! Я — веб-розробник з пристрастю до створення елегантних і
            функціональних сайтів.
          </p>
        </div>

        <section className="projects">

          <h2>Мої проєкти</h2>

                
            <div className="project-container">
              {PROJECTS.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    info={project.info}
                    img={project.img}
                  />
                );
              })}
            </div> 

        </section>

        <section className="contact">
          <h2>Контакти</h2>
          <p>Зв'яжіться зі мною: email@example.com</p>
        </section>

      </div>
    </>
  );
}

export default App;
