import projects from '../projects/projects';
import { useState } from 'react';
import DetailProject from './DetailProject';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/Projects.css';

function Projects() {
  const [viewDetailProject, setViewDP] = useState(false);
  const [projectDetail, setProject] = useState({});
  let isMobile = useMediaQuery('(max-width: 1300px)');
  const heightScreen = window.innerHeight;

  const viewProject = (project) => {
    if (!viewDetailProject) {
      setViewDP(true);
      setProject(project)
    } else {
      setViewDP(false);
    }
  }

  return (
    <section
      id="projetos"
      className="projects"
      style={ isMobile ? { padding: '40px 0', height: 'auto' } : { height: heightScreen } }
    >
      <h2>PROJETOS</h2>
      <div className="cont-projects">
        {
          projects.map((project, index) => (
            <div
              id={ `project${index + 1}` } 
              className="project"
              onClick={ () => viewProject(project) }
              key={ index }
            >
              <div>
                <img src={ project.thumb } alt={ project.description } />
              </div>
            </div>
          ))
        }
      </div>

      { viewDetailProject ? <DetailProject project={ projectDetail } close={ viewProject } /> : '' }
    </section>
  );
}

export default Projects;
