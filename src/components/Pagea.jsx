import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSSfiles/Pagea.css"
import image from "../assets/image.png"
import image2 from "../assets/Screenshot 2024-04-14 184158.png"
import image3 from "../assets/Screenshot 2024-04-15 171040.png"
import image4 from "../assets/Screenshot 2024-04-15 171046.png"
import image5 from "../assets/Screenshot 2024-04-15 171055.png"
import image6 from "../assets/Screenshot 2024-04-15 171113.png"
function Pagea() {
  const navigate = useNavigate();
    const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    
    description: '',
    description2:'',
    description3:'',
    name: '',
    email: '',
    password: '',
    
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const progress = (200*page) ;

  const isOptionSelected = formData.description !== '';
  const isOptionSelected2 = formData.description2 !== '';
  const isOptionSelected3 = formData.description3 !== '';


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
navigate("/home")
   

    console.log(formData);
  };

  return (
    <form  onSubmit={handleSubmit}>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {page !== 1 && (
           
                <a style={{ height: "20px", width: "20px", fontSize: "30px", marginLeft: "20px" ,display:"inline",cursor:"pointer"}}type="button"onClick={prevPage}>&lt; </a>
)}
  <div className="progress-container" style={{display:"inline"}}>
  
    <div className="progress-bar" >
        
      <div className="progress-fill" style={{ width: progress }}></div>
    </div>
  </div>
</div>
  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {page === 1 && (
      <div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px',marginTop:"20px" }}>Which describes you best?</div>
      <div style={{ textAlign: 'center', marginBottom:"60px"}}>This will help us personalize your experience.</div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px" }} className={`option-block  ${formData.description === 'STUDENT' ? 'selected' : ''}`  } onClick={() => handleChange({ target: { name: 'description', value: 'STUDENT' } })}>
        <i className="fas fa-user-graduate" style={{ color: 'blue' }}></i>  <strong>Student </strong>
        or soon to be enrolled
      </div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description === 'PROFESSIONAL' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description', value: 'PROFESSIONAL' } })}>
        <i className="fas fa-briefcase" style={{ color: 'green' }}></i>  <strong>Professional </strong>
        pusuing a career
      </div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description === 'PARENT' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description', value: 'PARENT' } })}>
        <i className="fas fa-user-friends" style={{ color: 'orange' }}></i>  <strong>Parent </strong>
        of a school-age child
      </div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description === 'LEARNER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description', value: 'LEARNER' } })}>
        <i className="fas fa-book" style={{ color: 'purple' }}></i>   <strong> Lifelong learner </strong>
        
      </div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description === 'TEACHER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description', value: 'TEACHER' } })}>
        <i className="fas fa-chalkboard-teacher" style={{ color: 'red' }}></i>  <strong>Teacher</strong>
      </div>
      <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description === 'OTHER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description', value: 'OTHER' } })}>
        <i className="fas fa-question-circle" style={{ color: 'gray' }}></i>  <strong>Other</strong>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button type="button" onClick={nextPage} disabled={!isOptionSelected} className="next-button">Continue</button>
     </div>
    </div>
      )}
      {page === 2 && (
        <div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px',marginTop:"20px" }}>Which are you most interested in?</div>
        <div style={{ textAlign: 'center', marginBottom:"60px"}}>Choose just one. This will help us to get you started, but won't limit your experience.</div>
        
        <div style={{ width: '550px', height: '50px' ,borderRadius:"5px" }} className={`option-block  ${formData.description2 === 'STUDENT' ? 'selected' : ''}`  } onClick={() => handleChange({ target: { name: 'description2', value: 'STUDENT' } })}>
          <i className="fas fa-chalkboard-teacher" style={{ color: 'blue' }}></i> <strong>Learning specific skills to advance my career</strong>
        </div>
        
        <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description2 === 'PROFESSIONAL' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description2', value: 'PROFESSIONAL' } })}>
          <i className="fas fa-lightbulb" style={{ color: 'green' }}></i> <strong>Exploring new topics I'm interested in</strong>
        </div>
        
        <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description2 === 'PARENT' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description2', value: 'PARENT' } })}>
          <i className="fas fa-calculator" style={{ color: 'orange' }}></i> <strong>Refreshing my math foundation</strong>
        </div>
        
        <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description2 === 'LEARNER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description2', value: 'LEARNER' } })}>
          <i className="fas fa-brain" style={{ color: 'purple' }}></i> <strong>Exercising my brain to stay sharp</strong>
        </div>
        
        <div style={{ width: '550px', height: '50px' ,borderRadius:"5px"}} className={`option-block ${formData.description2 === 'TEACHER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description2', value: 'TEACHER' } })}>
          <i className="fas fa-question-circle" style={{ color: 'red' }}></i> <strong>Something else</strong>
        </div>
        
        <br />
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button type="button" onClick={nextPage} disabled={!isOptionSelected2} className="next-button">Continue</button>
        </div>
      </div>
      )}
      {page === 3 && (
        <div>
         <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:"60px"}}>
  <div style={{ width: '50%', maxWidth: '300px' }}>
    <img src={image} alt="Your Image" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div style={{ marginLeft:"100px",width: '50%', maxWidth: '650px', textAlign: 'left', paddingLeft: '20px', justifyItems: "center" ,marginTop:"150px"}}>
  <p style={{ marginBottom: '10px',fontSize:"25px",fontWeight:"bold" }}>you're in a right place.</p>
  <p>Brilliant gets you hands-on to help improve your professional skills and knowledge. you'll interact with concepts and solve fun problems in math, science and computer science.</p>
</div>
</div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button type="button" onClick={nextPage} disabled={!isOptionSelected} className="next-button">Continue</button>
       </div>
      </div>
      )}
      {page === 4 && (
        <div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px',marginTop:"100px" }}>What is your maths comfort level?</div>
        <div style={{ textAlign: 'center', marginBottom:"60px"}}>Choose the highest level you feel confident in - you can always djust later.</div>
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:"50px"}}>
  <div style={{ display: 'flex', justifyContent: 'center', width: '1000px' }}>
    <div className={`option-block ${formData.description3 === 'STUDENT' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'STUDENT' } })} style={{ width: '200px', height: '200px', margin: '0 10px', textAlign: 'center',borderRadius:'5px' }}>
      <img src={image3} alt=""  style={{height:"50px",width:"70px",marginTop:"20px"}} />
      <p style={{fontWeight:"bold"}}>Arithmetic</p>
      <p style={{color:"gray"}}>Introductory</p>
    </div>
    
    <div className={`option-block ${formData.description3 === 'PROFESSIONAL' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'PROFESSIONAL' } })} style={{ width: '200px', height: '200px', margin: '0 10px', textAlign: 'center',borderRadius:'5px' }}>
    <img src={image4} alt=""  style={{height:"25px",width:"110px",marginTop:"20px"}}/>
      <p style={{fontWeight:"bold",marginTop:"20px"}}>Basic Algebra</p>
      <p style={{color:"gray"}}>Foundational</p>
    </div>
    
    <div className={`option-block ${formData.description3 === 'PARENT' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'PARENT' } })} style={{ width: '200px', height: '200px', margin: '0 10px', textAlign: 'center',borderRadius:'5px' }}>
    <img src={image5} alt=""  style={{height:"50px",width:"150px",marginTop:"20px"}}/>
      <p style={{fontWeight:"bold"}}>Intermediate Algebra</p>
      <p style={{color:"gray"}}>Intermediate</p>
    </div>
    
    <div className={`option-block ${formData.description3 === 'LEARNER' ? 'selected' : ''}`} onClick={() => handleChange({ target: { name: 'description3', value: 'LEARNER' } })} style={{ width: '200px', height: '200px', margin: '0 10px', textAlign: 'center',borderRadius:'5px' }}>
     
      <img src={image6} alt="" style={{height:"50px",width:"90px",marginTop:"20px"}}/>
      
    
      <p style={{fontWeight:"bold"}}>Calculus</p>
      <p style={{color:"gray"}}>Advanced</p>
    </div>
  </div>
</div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:"50px"}}>
    <button type="button" onClick={nextPage} disabled={!isOptionSelected3} className="next-button">Continue</button>
       </div>
      </div>
      )}
      {page === 5 && (
       <div>
       <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:"60px"}}>
<div style={{ width: '50%', maxWidth: '300px' }}>
  <img src={image2} alt="Your Image" style={{ width: '100%', height: 'auto' }} />
</div>
<div style={{ marginLeft:"100px",width: '50%', maxWidth: '650px', textAlign: 'left', paddingLeft: '20px', justifyItems: "center" ,marginTop:"70px"}}>
<p style={{ marginBottom: '10px',fontSize:"25px",fontWeight:"bold" }}>you're on your way!</p>
<p>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."

</p>
<p>- Jacob S.</p>
</div>
</div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button type="button" onClick={handleSubmit} disabled={!isOptionSelected} className="next-button">Continue</button>
     </div>
    </div>
      )}
      
      </div>

      
    </form>
  )
}

export default Pagea
