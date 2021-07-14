import React from 'react'
import { Link } from 'react-router-dom'
import './Book.css'
function Book({course_title,duration,num_lectures,num_reviews,num_subscribers,price,url}) {
    return (
        <div className="book">
                <h4>{course_title}</h4>
                <a href={url}>Course Url</a>
                <h6>Course Duration : {duration}</h6>
                <h6>Total Lacture : {num_lectures}</h6>
                <div className="row">
                    <div className="col">Review Count : <span>{num_reviews}</span></div>
                    <div className="col">Subscribers : <span>{num_subscribers}</span></div>
                </div>
                <h3 className="price"> $ {price}</h3>
        </div>
    )
}

export default Book
