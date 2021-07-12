import React from "react"
import Table from 'react-bootstrap/Table'

export default function About() {
    return (
        <div className="container">
            <div className="about-name noselect">Yuwen Zheng</div>
            <div className="about-sub">
                Echo (preferred name) | Female | Toronto 
                <br/>ywzhengtoronto@gmail.com 
            </div>
            <div> </div>
            <hr />
            <div className="about-section-name"> Education </div>
            <Table borderless className="about-content">
                <tbody>
                    <tr>
                        <td><strong>Bachelor of Applied Science</strong>, University of Toronto <br/>Major in <strong>Computer Engineering </strong></td>
                        <td className="float-right"> 2016 - 2021</td>
                    </tr>
                </tbody>
            </Table>
            <hr />
            <div className="about-section-name"> Experience </div>
            <Table borderless className="about-content">
                <tbody>
                    <tr>
                        <td><strong>Software Engineer in Test (Intern)</strong>, Ritual.co</td>
                        <td className="float-right"> 2019 - 2020</td>
                    </tr>
                    <tr>
                        <td><strong>Web Developer (Volunteer)</strong>, Cobomax Academy</td>
                        <td className="float-right"> 2019 - Present</td>
                    </tr>
                </tbody>
            </Table>
            <hr />
            <div className="about-section-name"> Skill </div>
            <Table borderless className="about-content about-skill">
                <tbody>
                    <tr>
                        <td> Chinese&nbsp;&nbsp;&nbsp;&nbsp; English&nbsp;&nbsp;&nbsp;&nbsp; Japanese</td>
                    </tr>
                    <tr>
                        <td> C&nbsp;&nbsp;&nbsp;&nbsp; C++&nbsp;&nbsp;&nbsp;&nbsp; Python&nbsp;&nbsp;&nbsp;&nbsp; MATLAB &nbsp;&nbsp;&nbsp;&nbsp; SQL </td>
                    </tr>
                    <tr>
                        <td> HTML&nbsp;&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;&nbsp; JavaScript&nbsp;&nbsp;&nbsp;&nbsp; React&nbsp;&nbsp;&nbsp;&nbsp; Express &nbsp;&nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp;&nbsp;  Postman</td>
                    </tr>
                    <tr>
                        <td>Microsoft Office&nbsp;&nbsp;&nbsp;&nbsp;Google Analytics &nbsp;&nbsp;&nbsp;&nbsp; BigQuery &nbsp;&nbsp;&nbsp;&nbsp; Atlassian Jira&nbsp;&nbsp;&nbsp;&nbsp; TestRail</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}