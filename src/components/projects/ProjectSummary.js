import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content yellow lighten-4 black-text card-panel hoverable">
                <span className="card-title"><b><blockquote>{project.title}</blockquote></b></span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}
export default ProjectSummary;