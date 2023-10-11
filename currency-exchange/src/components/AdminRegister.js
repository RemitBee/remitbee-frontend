import React, {useState} from 'react';
import {ValidationAdminRegistration} from "../common/AdminValidation";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function AdminRegister(props) {
    const [data,setData] = useState({
        adminName:'',
        adminContact:'',
        adminNic:'',
        adminEmail:'',
        adminPassword:'',
        confirmPassword:''
    });

    const [errors,setErrors] = useState({});

    const handleInput = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    function handleValidation(e){
        setErrors(ValidationAdminRegistration(data))
    }

    const valid = errors.valid;
    // console.log(errors.valid);

    const saveData = async()=>{
        try{
            const adminData = {
                firstName:data.adminName,
                email:data.adminEmail,
                phone:data.adminContact,
                nic:data.adminNic,
                password:data.adminPassword
            };

            handleValidation();

            const response = await Axios.post('http://16.16.26.112:8800/api/admin',adminData);

            if (response.status===201){
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successfull!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }else{
                console.error('Error:',response.data.message)
            }


        }catch (error){
            console.log('Error',error.message);
            if (error.response.status===422){
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid input. please insert correct data',
                    icon: 'question',
                    confirmButtonText: 'Ok'
                });
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: `${error.response.data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        }
    };
    return (
        <div className="col-md-6 pt-1">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card w-75 mb-3 border-5">
                    <div className="card-body p-5">
                        <h1 className="card-title text-center fw-bold" style={{ fontWeight: 'bold', color: 'blue' }}>Register</h1>
                        <label>Name</label>
                        <input id="txtName" type="text" className="form-control mb-2" name="name"
                               value={data.adminName}  onChange={handleInput}></input>
                        <input id="txtName" type="text" className="form-control mb-2" name="name" value={data.adminName}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.adminName}</p>}

                        <label>Nic</label>
                        <input id="txtEmployeeNumber" type="text" className="form-control mb-2" name="employeeNumber"
                               value={data.adminNic} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.adminNic}</p>}

                        <label>Contact</label>
                        <input id="txtContact" type="text" className="form-control mb-2" name="contact" value={data.adminContact}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.adminContact}</p>}

                        <label>Email</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" name="email" value={data.adminEmail}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.adminEmail}</p>}

                        <label>Password</label>
                        <input id="txtPassword" type="password" className="form-control mb-2" name="password"
                               value={data.password} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.password}</p>}

                        <label>Confirm Password</label>
                        <input id="txtConfirmPassword" type="password" className="form-control mb-2"
                               name="confirmPassword" value={data.confirmPassword} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.confirmPassword}</p>}

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <a href="#" onClick={saveData} className="btn btn-primary">Register</a>
                        </div>
                        <label>Already have an account?<Link to='/AdminSignIn' className="ms-2">Sign in</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;