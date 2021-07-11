import React from "react"
import './../style.css'

const projects = [
    {
        name: "2048",
        description: "a 2048 game"
    },
    {
        name: "anime forum",
        description:"an anime forum"
    },
];

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    render() {
        if(this.state.clicked) {
            return (
            <div className="project-card-container" onClick={this.handleClick}>
                <div> clicked</div>
            </div>
            )
        }
        else return (
            <div className="project-card-container" onClick={this.handleClick}>
                <div> not clicked </div>
            </div>

        )
    }
}

class ProjectSection extends React.Component {

    render() {
        let result = [];
        for (let i=0; i<projects.length; i++) {
            result.push(
                <ProjectCard name={projects[i].name} description={projects[i].description} key={i}> </ProjectCard>
            )
        }
        return result;
    }
}

export default function Project() {
    return <div className="container"> <ProjectSection /> </div> 
}