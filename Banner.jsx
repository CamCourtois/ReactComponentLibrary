import React from 'react'

export default function Banner({status, title, children}){
    let bannerIcon;
    
    switch(status){
        case "success": 
            bannerIcon = <i className="fa-solid fa-circle-check"></i>
            break;
        case "warning":
            bannerIcon = <i className="fa-solid fa-triangle-exclamation"></i>
            break;
        case "error":
            bannerIcon = <i className="fa-solid fa-circle-exclamation"></i>
            break;
        case "neutral":
            bannerIcon = <i className="fa-solid fa-circle-info"></i>
            break;
        default:
            bannerIcon = null;
    }
    
    return(
        <div className={`banner ${status}`}>
            <div className="banner-header">
                {bannerIcon}
                <p className='status-bold'>{title}</p>
            </div>
            {children}
        </div>
    )
}