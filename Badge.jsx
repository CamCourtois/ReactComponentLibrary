import React from 'react'

export default function Badge({color, ...rest}){
    
    console.log("rendered")
    console.log(color)
    
    let badgeClassNames = `badge ${color}-background ${color}-text`
    console.log(badgeClassNames)
    
    return(
        <div className={badgeClassNames}>
            Badge
        </div>
    )
}