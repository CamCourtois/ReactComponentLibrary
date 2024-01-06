import React from 'react'

export default function Testimonial({children, name, occupation, ...rest}){
  const { img, companyName, companyLogo } = rest;
  const hasImage = !!img; 
    let renderedTestimonialClass;
    hasImage ? renderedTestimonialClass = "testimonialWithImage" : renderedTestimonialClass = "testimonialWithoutImage" 
    
    console.log(renderedTestimonialClass)
    
    if(renderedTestimonialClass === "testimonialWithImage"){
        return(
        <div className="testimonial-container testimonialWithImage">
            
            <div className="img-container">
                {hasImage && <img className="testimonial-img" src={img} alt="Testimonial Image" />}
            </div>
            
            <div className="testimonial-text">
                <i className="fa-solid fa-quote-left quote-icon"></i>
                <p className="testimonial-description">{children}</p>
                <div className={`testimonial-info-with-image`}>
                    <p className="bold">{name}</p>
                    <p>{occupation}</p>
                </div>
            </div>
        
        </div>
        )
    }
    else if(companyLogo && companyName){
      return (
          
        <div className="testimonial-container testimonialWithoutImage">
            <div className="company-logo-container">
                {companyLogo}
                <p className="company-name bold">{companyName}</p>
            </div>
            
            <p className="testimonial-description-without-img">{children}</p>
            
            <div className="testimonial-info-without-img">
                <p className="bold">{name}</p>
                <p className="slash"> / </p>
                <p>{occupation}</p>
            </div>
        </div>
      );
    }    
  return(<>Incorrect props provided for Testimonial</>)
}