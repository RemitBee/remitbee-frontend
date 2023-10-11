// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState ,useHistory} from 'react'
import {  Link } from "react-router-dom";
import Axios from 'axios';
import Swal from 'sweetalert2'
import Navigation from "./Navigation";

function AdminSignIn(){

    const [data,setData] = useState({
        adminEmail:'',
        adminPassword:''
    });

    const handleInput = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    // const history = useHistory();

    const login = async()=>{
        try{
            const credentials = {
                email:data.adminEmail,
                password:data.adminPassword
            };

            console.log(credentials);

            const response = await Axios.get(`http://16.16.26.112:8800/api/auth`,{params: credentials});

            if (response.status===200){
                Swal.fire({
                    title: 'Success',
                    text: `${response.data.message}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                // history.push('/reader/home'); //Todo
            }
            
        }catch(error){
            console.log(error);
            // if (error.response.status===404){
            //     Swal.fire({
            //         title: 'Not found!',
            //         text: `${error.response.data.message}`,
            //         icon: 'question',
            //         confirmButtonText: 'Ok'
            //     });
            // }else if (error.response.status===401){
            //     Swal.fire({
            //         title: 'Invalid!',
            //         text: `${error.response.data.message}`,
            //         icon: 'error',
            //         confirmButtonText: 'Ok'
            //     });
            // }
            
        }
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
                        <input type="textEmail" className="form-control mb-2" name="email" value={data.email} onChange={handleInput}></input>

                        <label>Password</label>
                        <input type="password" className="form-control mb-2" name="password" value={data.password} onChange={handleInput}></input>

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <button class="btn btn-primary" onClick={login}>Sign In</button>
                        </div>

                        <label>Don't have an account ?<Link to='/reader/signup'> Register </Link></label>
                    </div>
                </div>
                </div>

              </div>
          </div>
        </div>
    </div>
    );
}

export default AdminSignIn;