import React from "react"
import './../style.css'
import { Github, ArrowUpRightSquareFill} from 'react-bootstrap-icons';

const projects = [
    {
        name: "Anime Forum",
        summary:"A Q&A anime forum",
        detail:"User can sign up or login, daily check in to earn exp and gold, ask question and answer questions, add rewards or level limitations to questions, like or dislike questions and answers",
        img: "../image/forum.jpg",
        tag: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
        github: "https://github.com/echoztoronto/Anime-Forum",
        website: "https://anime-qa-forum.herokuapp.com/"
    },
    {
        name: "TRPG.JS",
        summary:"A JavaScript Library for TRPGs",
        detail:"TRPG = Tabletop Role-Playing Game. Classes included: attribute panel, attribute bar, inventory, event list, skill panel",
        img: "../image/trpg.jpg",
        tag: ["JavaScript"],
        github: "https://github.com/echoztoronto/TRPG.JS",
        website: "https://trpg-demo.herokuapp.com/"
    },
    {
        name: "COBOMAX",
        summary:"A website for Cobomax Academy",
        detail:"Cobomax Academy is a nonprofit organization dedicated to expanding access to Science, Technology, Engineering and Mathematics (STEM) education for young students in London Ontario.",
        img: "../image/cobomax.jpg",
        tag: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/echoztoronto/COBOMAX",
        website: "http://www.cobomax.org/"
    },
    {
        name: "A monitoring and forecast system",
        summary:"A monitoring and forecast system",
        detail:"The project goal is to develop an energy monitoring and short-term load forecasting system that is able to identify energy consumption on university campuses.",
        img: "../image/496.jpg",
        tag: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.JS"],
        github: "https://github.com/echoztoronto/496FE",
        website: "https://echoztoronto.github.io/496FE/"
    },
    {
        name: "Computer Networks",
        summary:"Course labs for Computer Networks",
        detail:"Implemented the server and the client programs for a File Transfer (UDP) and a Text Conferencing (TCP) application",
        img: "../image/361.jpg",
        tag: ["C"],
        github: "https://github.com/echoztoronto/Computer-Networks"
    },
    {
        name: "EasyDB",
        summary:"Course labs for Programming Languages",
        detail:"EasyDB Database Driver (Python), Object-Relational Mapping (Python), Concurrent In-Memory Database (Rust), Remote Procedure Call Framework (C++)",
        img: "../image/326.jpg",
        tag: ["Python", "Rust", "C++"],
        github: "https://github.com/echoztoronto/EasyDB"
    },
    {
        name: "Pathage",
        summary:"A geographic information system using data from OpenStreetMap",
        detail:"Algorithm used for shortest path finding: A*, greedy, selection swap, pair swap and two opt.",
        img: "../image/pathage.jpg",
        tag: ["C++"],
        github: "https://github.com/echoztoronto/Pathage"
    },
    {
        name: "YWZ",
        summary:"My first web project",
        detail:"Created it using pure HTML/CSS/JavaScript, it's somehow funny.",
        img: "../image/ywz.jpg",
        tag: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/echoztoronto/YWZ",
        website: "https://echoztoronto.github.io/YWZ/"
    },
    {
        name: "LEGO Morse Decoder",
        summary:"LEGO Morse Decoder",
        detail:"Built by Nios-II architecture, motor, light sensor and LEGO pieces, with audio functionality",
        img: "../image/lego.jpg",
        tag: ["Assembly"],
        github: "https://github.com/echoztoronto/LEGO-Morse-Decoder"
    },
    {
        name: "2048",
        summary: "A 2048 game built on DE1-SoC board",
        detail: "Use arrow keys on keyboard or the buttons on DE1-SoC board to move the tiles, tiles with the same number merge into one when they touch.",
        img: "../image/2048.jpg",
        tag: ["Verilog"],
        github: "https://github.com/echoztoronto/2048"
    },
    {
        name: "3D-Printer",
        summary: "A entry-level professional 3D printer used in print farms",
        detail: "Includes three designs: two candidate designs and one final design",
        img: "../image/printer.jpg",
        tag: ["SOLIDWORKS"],
        github: "https://github.com/echoztoronto/3D-Printer"
    },
    
];

class ProjectTag extends React.Component {
    render() {
        let result = [];
        for (let i=0; i<this.props.tag.length; i++) {
            result.push(
                <span className="project-tag" key={i}> {this.props.tag[i]}</span>
            )
        }
        return result;
    }
}

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { hovered: false };
        this.handleHoverOver = this.handleHoverOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleHoverOver() {
        this.setState({hovered: true});
    }

    handleMouseLeave() {
        this.setState({hovered: false});
    }


    render() {
        if(this.state.hovered) {
            return (
            <div className="project-card-container noselect" onMouseLeave={this.handleMouseLeave}>
                <div className="inline-block-container"> 
                    <img className="project-img" src={this.props.img} alt="img"/>
                    <div className="project-content">
                        <div className="project-summary">
                            {this.props.summary} 
                            <a href={this.props.github}>
                                <Github className="github-icon" />
                            </a>
                            {this.props.website !== undefined &&  
                                <a href={this.props.website}>
                                    <ArrowUpRightSquareFill className="github-icon" />
                                </a>
                            }
                        </div>
                        <div className="project-detail">
                            {this.props.detail}
                        </div>
                        <div className="project-tag-container">
                            <ProjectTag tag={this.props.tag}/> 
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        else return (
            <div className="project-card-container noselect" onMouseOver={this.handleHoverOver}>
                <div className="inline-block-container">
                    <div className="project-name">
                        {this.props.name}
                    </div>
                </div>
            </div>

        )
    }
}

class ProjectSection extends React.Component {

    render() {
        let result = [];
        for (let i=0; i<projects.length; i++) {
            result.push(
                <ProjectCard 
                    name={projects[i].name} 
                    summary={projects[i].summary}
                    detail={projects[i].detail}
                    img={projects[i].img}
                    tag={projects[i].tag}
                    github={projects[i].github}
                    website={projects[i].website}
                    key={i}> 
                </ProjectCard>
            )
        }
        return result;
    }
}

export default function Project() {
    return <div className="container"> <ProjectSection /> </div> 
}