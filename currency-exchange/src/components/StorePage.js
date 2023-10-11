import React, {useState} from 'react';
import {ValidationAdminRegistration} from "../common/Validation";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AdminRegister(props) {
    const [data,setData] = useState({
        name:'',
        address:'',
        town:'',
        locationUrl:'',
        currencyRate:''
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
            const adminShopData = {
                name:data.name,
                address:data.address,
                town:data.town,
                locationUrl:data.locationUrl,
                currencyRate:data.currencyRate
            };

            handleValidation();

            const response = await Axios.post('http://16.16.26.112:8800/api/admin',adminShopData);

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
                        <h1 className="card-title text-center fw-bold" style={{ fontWeight: 'bold', color: 'blue' }}>Add Store</h1>
                        <label>Shop Name</label>
                        <input id="txtName" type="text" className="form-control mb-2" name="name" value={data.name}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.name}</p>}

                        <label>Address</label>
                        <input id="txtEmployeeNumber" type="text" className="form-control mb-2" name="employeeNumber"
                               value={data.nic} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.nic}</p>}

                        <label>Town </label>
                        <input id="txtTown" type="text" className="form-control mb-2" name="town" value={data.town}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.contact}</p>}

                        <label>Select Location</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" name="email" value={data.email}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.email}</p>}

                        <label>Currency</label>
                        <input id="txtPassword" type="password" className="form-control mb-2" name="password"
                               value={data.password} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.password}</p>}

                       <div>

                       </div>

                        <label>Rate</label>
                        <input id="txtConfirmPassword" type="password" className="form-control mb-2"
                               name="confirmPassword" value={data.confirmPassword} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.confirmPassword}</p>}

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <a href="#" onClick={saveData} className="btn btn-primary">Submit</a>
                        </div>
                        <label>Already have an account?<Link to='/reader/signin' className="ms-2">Sign in</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;