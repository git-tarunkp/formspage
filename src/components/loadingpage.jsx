import React, { useState, useEffect } from 'react';
import '../CSSfiles/Loadingpage.css'; // Import CSS file for styling


function loadingpage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading delay (e.g., fetching data from an API)
      const delay = setTimeout(() => {
        setIsLoading(false); // Set loading to false after delay
      }, 2000); // Simulated delay of 2 seconds
  
      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(delay);
    }, []); // Run only once on component mount
  
  return (
    <div className="loading-container">
      {isLoading ? (
        
            <div >
                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loader"></div>
                </div>
                    
                 <p style={{fontWeight:"bold", fontSize:"25px"}}>Finding learning path recommendations for you based on your responses.</p>
            </div>
       
      ) : (
        <div className="content">
          {/* Your content goes here */}
          
        </div>
      )}
    </div>
  )
}

export default loadingpage

