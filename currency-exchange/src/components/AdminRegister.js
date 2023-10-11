import React, {useState} from 'react';
import {ValidationAdminRegistration} from "../common/AdminValidation";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function AdminRegister(props) {
   
    // console.log(errors.valid);

   
    return (
        <div className="col-md-6 pt-1">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card w-75 mb-3 border-5">
                    <div className="card-body p-5">
                        <h1 className="card-title text-center fw-bold" style={{ fontWeight: 'bold', color: 'blue' }}>Register</h1>
                        <label>Name</label>
                        <input id="txtName" type="text" className="form-control mb-2" 
                               ></input>
                       
                      

                        <label>Nic</label>
                        <input id="txtEmployeeNumber" type="text" className="form-control mb-2"></input>
                       

                        <label>Contact</label>
                        <input id="txtContact" type="text" className="form-control mb-2"></input>
                      

                        <label>Email</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" ></input>
                        

                        <label>Password</label>
                        <input id="txtPassword" type="password" className="form-control mb-2"></input>
                        

                        <label>Confirm Password</label>
                        <input id="txtConfirmPassword" type="password" className="form-control mb-2"
                               name="confirmPassword" ></input>
                       

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <a href="#"  className="btn btn-primary">Register</a>
                        </div>
                        <label>Already have an account?<Link to='/AdminSignIn' className="ms-2">Sign in</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;