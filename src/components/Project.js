import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text> {this.props.description} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
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