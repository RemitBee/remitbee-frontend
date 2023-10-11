// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState ,useHistory} from 'react'
import {  Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";
const loginUrl= 'http://16.16.26.112:8800/api/auth/login';

function AdminSignIn(){
   const [username,setUsername] = useState('')
   const [password,setPassword] = useState('')
   const [errorMsg,setErrMsg] = useState('')
   const [success,setSuccess] = useState(false)
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   const handleSubmit = async(e)=>{
       e.preventDefault();
        if(regex.test(username)){
           setErrMsg("")
           setUsername('')
           setPassword('')
           setSuccess(true)
         
        }
        if(!regex.test(username) && username!=""){
           setErrMsg("Email is not valid")
           toast.success("Email is not valid",{theme:'colored'})
        }
       
   else{
      
       const requestBody={
           email:username,
           password:password
       }
        
       let responseData = await axios.post(loginUrl,requestBody).then(response=>{
          console.log(response)
        toast.success("Login Successfully",{theme:'colored'})
        //window.location.href = 'https://solidhotelandresort.com/dashboard';
        
          
       }).catch(error=>{
            toast.error("Please check email and password",{theme:'colored'})
            })
   }
        
   }
    
    const onChange = async(e)=>{
        setUsername(e.target.value)
        if(regex.test(e.target.value)){
            setErrMsg("")	
        }
        // if(!regex.test(e.target.value)){
        //     toast.success("Email is not validy",{theme:'colored'})
           
        // }
        
    }

    return (
        <div className="" style={{height:'100vh'}}>
        <Navigation></Navigation>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <span className="fs-1" style={{fontSize:'10px'}}>Currency Management System</span>
              <h1 style={{fontSize:'60px'}}>WELCOME</h1>
              <p style={{fontSize:'20px'}}>Easiest </p>
              <div className="d-flex justify-content-center gap-4">
              </div>
            </div>


              <div className="col-md-6 pt-5">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card w-75 mb-3 border-5">
                    <div class="card-body p-5">
                        <h5 class="card-title text-center fw-bold">Sign In</h5>

                        <label>Email</label>
                        <input type="textEmail" className="form-control mb-2" name="username" placeholder="john@example.com" onChange={onChange}
                            value={username} ></input>

                        <label>Password</label>
                        <input type="password" className="form-control mb-2" name="password"  placeholder="**************" onChange={(e) => setPassword(e.target.value)}
                            value={password}></input>

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <button class="btn btn-primary" onClick={handleSubmit}>Sign In</button>
                        </div>

                        <label>Don't have an account ?<Link to='/AdminRegister'> Register </Link></label>
                    </div>
                </div>
                </div>

              </div>
          </div>
        </div>
        <ToastContainer />
    </div>
    );
}

export default AdminSignIn;