import React, { useState } from 'react';
import locationIcon from '../assets/icon/icon.png'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Contact = () => {
  const [showContactMsg, setShowContactMsg] = useState('');

  //frontend form validation using formik and yup

  const validationSchema = ()=>{
    return Yup.object({
      name : Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    })

  }
  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema:validationSchema(),
    onSubmit: async (values)=>{
      try {
        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contactwithme`,values);
        if(res.data.success){
          toast.success(res.data.message);
         setShowContactMsg(res.data.message); 
          formik.resetForm();
           // Automatically remove the response message after 3 seconds
          setTimeout(() => {
            setShowContactMsg('');            
          }, 3000);
        }
        
      } catch (error) {
        if(error.response){
          toast.error(error.response.data.message)
        }
        else{
          toast.error("something went wrong")
        }
        
      }

    }

  })


  return (
    <>
      <div className="contact_container">
        <div className="container contact">
          <div className='contact_content'>
            <h2>GET IN TOUCH</h2>
            {/* <p className='subPara'>Reach out anytime for collaboration, <br /> ideas, or questions. Let's connect.</p> */}
            <p className='subPara'>Feel free to reach out anytime. I'm eager to discuss ideas, <br /> collaborate, or answer questions. Let's connect and <br /> make great things happen.</p>
          </div>
          <div className="address" data-aos="fade-down">
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Address</h2>
                <p className='subPara'>Gaushala, Mahottari, Nepal</p>
              </div>
            </div>
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Phone</h2>
                <p className='subPara'>+977 9807865665</p>
              </div>
            </div>
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Email</h2>
                <p className='subPara'>sunielsharma1921@gmail.com</p>
              </div>
            </div>
          </div>


          <div className="message" data-aos="fade-right">
            <div className="left_Contact">
              <div className='location_maps'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9483.724427533569!2d85.32362098526642!3d27.719673468719524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1695956133499!5m2!1sen!2snp" ></iframe>
              </div>
            </div>

            <div className="right_Contact">
              <h2>Write me a message</h2>
              <p className='paraForm'>Use the form to contact me, I'll be happy to hear from you!</p>
              <form className='form' onSubmit={(e)=>{
                e.preventDefault();
                formik.handleSubmit(e);
              }}>
                <div className="input-row">
                 <div>
                 <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className='input' type="text" name="name" id="name" placeholder="Name*" required />
                  {formik.touched.name && formik.errors.name && <p className='errors'>{formik.errors.name}</p>}
                 </div>
                  <div>
                  <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='input' type="email" name="email" id="email" placeholder="Email*" required />
                  {formik.touched.email && formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
                  </div>
                </div>
                <div className="textarea-row">
                  <div>
                  <textarea onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} className='textarea' name="message" id="message" placeholder="Your Message*" required></textarea>
                  {formik.touched.message && formik.errors.message && <p className='errors'>{formik.errors.message}</p>}
                  </div>
                </div>
                <p className='showcontactmsg'>{showContactMsg}</p>
                <button className="btn hiremebtn sendMsg">Send Message</button>

              </form>
            </div>
          </div>

        </div>

      </div>




    </>
  )
}

export default Contact