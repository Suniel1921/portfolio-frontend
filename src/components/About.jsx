import React from 'react';
import myImage from '../assets/logo/me.png'
import myResume from '../assets/logo/sunil.pdf'
import '../App.css';

const About = () => {
  return (
    <>
      <section className='about_container'>
        <div className="container aboutsec" data-aos="fade-right">
       
          <div className="about_left">
            <img className='myImage animImg' src={myImage} alt="myimage" />
            
            <div className="btns cvBtn">
                  <a href={myResume} download={myResume}>  <button className='btn hiremebtn'>DOWNLOAD CV</button></a>
                </div>

          </div>

          <div className="about_right">
          <div className="zigzigIcon">
        <img className='zigzagAbout' src="/zigzag/zigzag (2).png" alt="" />
      </div>
            <h3><strong className='strong'>ABOUT ME</strong></h3>
            <h2 className='heading'>Journey from Intern to Developer</h2>
            {/* <h1 className='heading'>I'm a Freelancer, I work <br /> from Anywhere</h1> */}
            <p className='subPara'>AavaTechNepal: Starting as a backend developer at AavaTechNepal, I spent three months interning and six months working. I learned to create both the visible parts of websites and the hidden technical parts. Working on diverse projects taught me how to ensure websites are user-friendly and work seamlessly with different teams.</p> <br />
            <p className='subPara'>Nepal Tech: Now at Nepal Tech as a MERN stack full-stack developer, I apply my skills to create impressive web applications. I focus on using the latest tech and best practices to ensure our projects are cutting-edge. I'm excited to continue pushing the boundaries of web development and contributing to innovative projects.</p>

            <div className="myDetails">

              <div className="myDetails_left">
                <h2>NAME</h2>
                <p className='subPara'>Sunil Sharma</p>
                <h2>PHONE</h2>
                <p className='subPara'>+977 9807865665</p>
                <h2>EMAIL</h2>
                <p className='subPara'>sunielsharma1921@gmail.com</p>
              </div>

              {/* <div className="btns">
                  <a href={myImage} download={myImage}>  <button className='btn hiremebtn'>DOWNLOAD CV</button></a>
                </div> */}


              <div className="myDetails_right">
                <h2>AGE</h2>
                <p className='subPara'>23</p>
                <h2>EDUCATION</h2>
                <p className='subPara'>Bachelor in Computer Science</p>
                <h2>FREELANCE</h2>
                <p className='subPara'>Available</p>

              </div>

            </div>








          </div>

        </div>
      </section>
    </>
  )
}

export default About