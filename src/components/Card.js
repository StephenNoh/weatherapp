import React from "react"

const Card = ({ temperature, condition, location, icon }) => (
    <div className="card">
        <h3>Woof! Woof! Woof!</h3>
        <h3 className="location">{location}</h3>
        <h1 className="temperature">{temperature}°F</h1>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
        <h3 className="condition">{condition}</h3>
    </div>
)

export default Card