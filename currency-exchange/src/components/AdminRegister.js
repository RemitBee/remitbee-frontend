import React, {useState} from 'react';
import {ValidationAdminRegistration} from "../common/AdminValidation";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminRegister(props) {
   
    const initialFValues ={
         firstName:'',
         lastName:'',
         email:'',
         phone:'',
         nic:'' ,
         img: '',
         password: '',
         comfirm_password:'',
          id:0
        }
    
     const[values, setvalues]= useState(initialFValues);
     const handleInputChange=e=>{
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]: value
        }) 
    }

    function userSubmit(event) {
  
        console.log(values)
        if (values.email == '') {
            toast.error("Missing Email", { theme: 'colored' })
        }
        if (values.firstName == '') {
            toast.error("Missing First name", { theme: 'colored' })
        }
        if (values.phone == '') {
            toast.error("Missing Phone Number", { theme: 'colored' })
        }
       
        if (values.password == '') {
            toast.error("Missing Password", { theme: 'colored' })
        }
        if (values.comfirm_password == '') {
            toast.error("Missing Confirm Password", { theme: 'colored' })
        }
        // if ((values.confirm_password) != (values.password)) {
        //     toast.error("Does Not Match Password", { theme: 'colored' })
        //  }
          const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        emailPattern.test(values.email)
        if (!emailPattern.test(values.email)) {
            toast.error("Please Check Email", { theme: 'colored' })
        }
        if ((emailPattern.test(values.email)) && (values.firstName != '') && (values.phone != '')) {
            event.preventDefault()
           const post = {
                "email": values.email,
                "firstName": values.firstName,
                "lastName": values.lastName,
                "phone":values.phone,
                "nic": values.nic,
                "password": values.password,

            }


            axios.post(`http://16.16.26.112:8800/api/auth/register`, post)
                .then(responce => {
                    console.log(responce)
                    setvalues(initialFValues)
                    toast.success("User Created Successfully, Please check this email", { theme: 'colored' })
                    window.location.href = 'http://localhost:3000/AdminSignIn';
                })
                .catch(err => {
                    console.log(err)
                    toast.error(err)
                })


        }



    }
    return (
        <div className="col-md-6 pt-1">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card w-75 mb-3 border-5">
                    <div className="card-body p-5">
                        <h1 className="card-title text-center fw-bold" style={{ fontWeight: 'bold', color: 'blue' }}>Register</h1>
                        <label>First Name</label>
                        <input id="txtName" type="text" className="form-control mb-2" name="firstName"  value={values.firstName} onChange={handleInputChange}></input>
                       
                         <label>Last Name</label>
                        <input id="txtEmployeeNumber" type="text" className="form-control mb-2" name="lastName"  value={values.lastName} onChange={handleInputChange}></input>
                    
                      <label>Email</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" name="email"  value={values.email} onChange={handleInputChange} ></input>
                       
                        <label>Phone Number</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" name="phone"  value={values.phone} onChange={handleInputChange} ></input>
                        

                        <label>NIC Number</label>
                        <input id="txtPassword" type="text" className="form-control mb-2" name="nic"  value={values.nic} onChange={handleInputChange}></input>
                        

                        <label> Password</label>
                        <input id="txtConfirmPassword" type="password" className="form-control mb-2" name="password"  value={values.password} onChange={handleInputChange} ></input>
                       
                        <label>Confirm Password</label>
                        <input id="txtConfirmPassword" type="password" className="form-control mb-2" name="comfirm_password"  value={values.comfirm_password} onChange={handleInputChange} ></input>
                       

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <a href="#"  className="btn btn-primary" onClick={userSubmit} >Register</a>
                        </div>
                        <label>Already have an account?<Link to='/AdminSignIn' className="ms-2">Sign in</Link></label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AdminRegister;