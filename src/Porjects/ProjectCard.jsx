import'./Project.css'


function ProjectCard(props) {
    const {title} = props;
    const {info} = props;
    const {img} = props;
  return (
   <div className="project-card">
          <img className="project-img" src={img} alt="logo" />
          <h3>{title}</h3>
          <p>{info}</p>
          <div className="project-button">
            <button>Перейти</button>
          </div>
        </div>
  );
}

export default ProjectCard;