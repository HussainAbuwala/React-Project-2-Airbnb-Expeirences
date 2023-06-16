import React from "react"
import starLogo from "../images/star.png"
import getImageByKey from "../image"

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
            badgeText && <div className="card--badge">{badgeText}</div>
            }
            <img
                src={getImageByKey(props.coverImg)}
                alt="house"
                className="card--image"
            />
            <div className="card--stats">
                <img src={starLogo} className="card--star" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}