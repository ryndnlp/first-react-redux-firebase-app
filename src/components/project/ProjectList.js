import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    const renderProjectSummary = projects && projects.map(project => 
        <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project}  />
        </Link>
    );
    return(
        <div className="project-list section">
            {renderProjectSummary}
        </div>
    );
}

export default ProjectList;