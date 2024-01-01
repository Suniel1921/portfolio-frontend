import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthGlobally } from './context/AuthContext';


const Login = () => {
  const [auth, setAuth] = useAuthGlobally();

  const navigate = useNavigate();

  const validationSchema = ()=>{
    return Yup.object({
      email : Yup.string().email("Invalid Email").required("Email is required"),
      password : Yup.string().required("Password is required"),
    })
  }

  const formik = useFormik({
    initialValues:{
      email: '',
      password : '',
    },
    validationSchema: validationSchema,
    onSubmit : async (values)=>{
      try {
        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/user/login`,values);
        if(res.data.success){
          toast.success(res.data.message);
          // save the user and token in localStorage
          localStorage.setItem('Token', JSON.stringify(res.data));

          setAuth({
            ...auth, 
            user: res.data.userExit,
            token : res.data.token,
          })         
          
          navigate('/')        
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
         <div className="container">
        <div className="mainform">
          <div className="formContainer">
            <h3>Login Here</h3>
            <form className="regform" onSubmit={(e)=>{
              e.preventDefault();
              formik.handleSubmit(e);
            }}>            
              <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="email" name="email" placeholder="Enter Your Email" />
              {formik.touched.email && formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
              <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" placeholder="Enter Your Password"/>
              {formik.touched.password && formik.errors.password && <p className='errors'>{formik.errors.password}</p>}
              <button className="registerBtn" type="submit"> Login</button>
              <p>Not Have An Account ? <Link to={"/register"}>Register Here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login