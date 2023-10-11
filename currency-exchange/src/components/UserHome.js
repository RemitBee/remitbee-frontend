import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Swal from 'sweetalert2'

function UserHome() {
    const [accountNumber,setAccountNumber]=useState('');
    const [data,setData]= useState([]);

    const getData = async()=>{
        try{
            const response = await Axios.get(`http://16.16.26.112:8800/api/readings/${accountNumber}`);

            if (response.status===200){
                setData(response.data);
                console.log(response);
                Swal.fire({
                    title: 'Success!',
                    text: `${response.data.message}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }else{
                setData([]);
                console.error('Error:',response.data.message)
            }
        }catch(error){
            Swal.fire({
                title: 'Error!',
                text: `${error.response.data.message}`,
                icon: 'error',
                confirmButtonText: 'Close'
            })
            setData([]);
        }
    }

  return (
    

    <div>
        <Navigation/>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'80vh',width:'100vw'}}>
            <div className=''>
                <h1 class="card-title text-center fw-bold mb-4">Check Your Bill</h1>
                <div className='d-flex gap-2 justify-content-center align-items-center p-2'>
                    <input type="text" className="form-control text-center" placeholder='Enter the account number' value={accountNumber} 
                    onChange={(e)=>setAccountNumber(e.target.value)}></input>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary" onClick={getData}>Search </a>
                    </div>
                </div>
            </div>
            <div class=" mb-3 border-5 mt-3" style={{width:'60%'}}>
                <div class="card-body p-5" style={{minWidth:'200px'}}>
                    <div className='row p-2'>
                            <div className=' col-md-6'>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Last Reading Date:</label>
                                    <label className=' form-label'>{data['lastReadingDate']}</label>
                                </div>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Previous Reading Date:</label>
                                    <label className=' form-label'>{data['previousReadingDate']}</label>
                                </div>

                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Last Meter Reading:</label>
                                    <label className=' form-label'>{data['lastMeterReading']}</label>
                                </div>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Previous Meter Reading:</label>
                                    <label className=' form-label'>{data['previousMeterReading']}</label>
                                </div>
                            </div>
                            <div className=' col-md-6'>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Fixed Charge Amount:</label>
                                    <label className=' form-label'>{data['fixedCharge']}</label>
                                </div>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>First Range billed amount:</label>
                                    <label className=' form-label'>{data['firstRangeAmount']}</label>
                                </div>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Second Range billed amount:</label>
                                    <label className=' form-label'>{data['secondRangeAmount']}</label>
                                </div>
                                <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                    <label className='form-label mx-5 fw-bold'>Third Range billed amount:</label>
                                    <label className=' form-label'>{data['thirdRangeAmount']}</label>
                                </div>
                            </div>
                    </div>
                    <div>
                        <div className='bg-light rounded-3 d-flex p-3 mb-3'>
                                <label className='form-label mx-5 fw-bold'>Total amount:</label>
                                <label className=' form-label'>{data['totalAmount']}</label>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default UserHome