import React from 'react'

export default function Card({icon, cardTitle, children}){
    return (
        <div className="card-container">
            <div className="card-icon-slot">
                {icon}
            </div>
            <div className="card-text-container">
                <div className="card-text">
                    <p className="card-title">{cardTitle}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}