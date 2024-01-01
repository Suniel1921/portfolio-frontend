import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate();


    const validationSchema = () => {
      return Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required")
          .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
            "Password must contain at least one uppercase letter, one number, and one special character"
          ),
      });
    };
    

    const formik = useFormik({
        initialValues: {
            name : '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,

        onSubmit : async (values)=>{
           try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/user/register`,values);
            if(res.data.success){
                toast.success(res.data.message);
                navigate('/login')
                formik.resetForm();
            }
            
           } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);
            }
            else{
                toast.error("something went wrong");
            }            
            
           }
        }
    })


  return (
    <>
      <div className="container">
        <div className="mainform">
          <div className="formContainer">
            <h3>Register Here</h3>
            <form className="regform" onSubmit={(e)=>{
                e.preventDefault();
                formik.handleSubmit(e);                
            }}>            
              <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="text" name="name" placeholder="Enter Your Name" />
              {formik.touched.name && formik.errors.name && <p className="errors">{formik.errors.name}</p>}
              <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="email" name="email" placeholder="Enter Your Email" />
              {formik.touched.email && formik.errors.email && <p className="errors">{formik.errors.email}</p>}
              <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" placeholder="Enter Your Password"/>
              {formik.touched.password && formik.errors.password && <p className="errors">{formik.errors.password}</p>}
              <button className="registerBtn" type="submit"> Register</button>
              <p>Already Have An Account ? <Link to={"/login"}>Login Here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
