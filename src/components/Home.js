import React from "react"
import './../style.css'
import './../animation.css'

export default function Home() {
    return (
    <div className="wide-container noselect"> 
        <div className="fade-in"> 
            <div className="hero-1  roll-out-left">
                Hello
            </div>
        </div>
        <div className="hero-2 bounce-in-right">
            I'm Echo
        </div>
        <div className="hero-3 bounce-in-bottom" >
            Web Developer | QA Analyst | Gamer
        </div>
    </div>
    )
}