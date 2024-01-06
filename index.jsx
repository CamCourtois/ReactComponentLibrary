import React from 'react';
import ReactDOM from 'react-dom/client';

import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    // <div>
    //   <Testimonial 
    //     img = "https://kristinepaulsenphotography.com/images/Headshots-Love-Notes_003-1.jpg"
    //     occupation = "Walmart, CEO"
    //     name = "Mary Elizabeth"
    //   >
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    //   </Testimonial>
      
    // </div>
    <div>
      <Testimonial
        occupation = "Google, Junior Software Engineer"
        name = "Katherine Bates"
        companyLogo = {<i className="fa-brands fa-google"></i>}
        companyName = "Google"
      >
      <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.” </p>
      </Testimonial>
    </div>
    // <div className="badge-container">
    //   <Badge color="purple"/>
    //   <Badge color="green"/>
    //   <Badge color="red"/>
    //   <Badge color="yellow"/>
    //   <Badge color="blue"/>
      
    // </div>
    // <div>
    //   <Banner status="success" title="Congratulations">
    //     <p>You have successfully subscribed to the newsletter!</p>
    //   </Banner>
    //   <Banner status="warning" title="Attention">
    //     <p>Downloading could result in malicious content.</p>
    //   </Banner>
    //   <Banner status="error" title="There is a problem with your application.">
    //     <p>Detected a fatal error in storage updates. </p>
    //   </Banner>
    //   <Banner status="neutral" title="Update available">
    //     <p>A new version of this application is available</p>
    //   </Banner>
    // </div>
    // <div>
    //   <Card 
    //     icon={<i className="fa-solid fa-cloud-arrow-down"></i>}
    //     cardTitle="Easy Download"
    //   >
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </Card>
    // </div>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
