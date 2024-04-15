import React, { useState, useEffect } from 'react';
import LoadingIndicator from './loadingpage'; // Assuming you have a LoadingIndicator component
import "../CSSfiles/homecss.css"
import image from "../assets/Screenshot 2024-04-15 153237.png"
const Home= () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data from an API)
    const delay = setTimeout(() => {
      setIsLoading(false); // Set loading to false after delay
    }, 2000); // Simulated delay of 2 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []); // Run only once on component mount


  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    
    description: '',
    description2:'',
    description3:'',
  
    
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

   

    console.log(formData);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator/> 
      ) : (
        <div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px',marginTop:"100px" }}>Learning paths based on your answers.</div>
        <div style={{ textAlign: 'center', marginBottom:"60px"}}>Choose one to get started. You can switch anytime.</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', width: '1000px' }}>
  <div className={`option-block ${formData.description3 === 'STUDENT' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'STUDENT' } })} style={{ width: '400px', height: '170px', margin: '0 10px', textAlign: 'center', borderRadius: '10px', display: 'flex', position: 'relative' }}>
  <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', paddingLeft:"10px",paddingRight:"10px", borderRadius: '15px',paddingTop:"4px",paddingBottom:"4px", fontWeight: 'bold',fontSize:"10px",marginTop:"8px" }} className='colorpop'>
    MOST POPULAR
  </div>
  <div style={{marginTop:"30px"}}>
        <p><span style={{fontWeight:"bold"}}>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p>
      </div>
      <div style={{ marginLeft: '10px' ,marginTop:"30px"}}>
        <img src={image} alt="" style={{ width: '100px', height: '100px' }} />
      </div>
</div>

    <div className={`option-block ${formData.description3 === 'PROFESSIONAL' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'PROFESSIONAL' } })} style={{ width: '400px', height: '170px', margin: '0 10px', textAlign: 'center', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
      <div>
        <p><span style={{fontWeight:"bold"}}>Mathemeticak thinking</span> Build your foundational skills in algebra, geometry, and probability</p>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <img src={image} alt="" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>
  </div>
</div>

      </div>
      )}
    </div>
  );
};

export default Home;