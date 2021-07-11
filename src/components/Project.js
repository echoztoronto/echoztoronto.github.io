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
        this.state =  { hovered: false };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(prevState => ({
            hovered: !prevState.hovered
        }));
    }


    render() {
        if(this.state.hovered) {
            return (
            <div className="project-card-container" onMouseOut={this.handleHover}>
                <div> clicked</div>
            </div>
            )
        }
        else return (
            <div className="project-card-container" onMouseOver={this.handleHover}>
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